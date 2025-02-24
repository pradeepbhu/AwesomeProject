import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchItems, insertItem, deleteItem,updateItem } from '../database/db';

export const loadItems = createAsyncThunk('items/load', async () => {
  return await fetchItems();
});

export const addItem = createAsyncThunk('items/add', async ({ name, email, mobileNumber, age, empID, department, address  }) => {
  await insertItem(name, email, mobileNumber, age, empID, department, address );
  return { name, email, mobileNumber, age, empID, department, address  };
});

export const removeItem = createAsyncThunk('items/remove', async id => {
  await deleteItem(id);
  return id;
});

export const updateListItem = createAsyncThunk('items/update', async ({ id, name, email, mobileNumber, age, empID, department, address }) => {
    await updateItem(id, name, email, mobileNumber, age, empID, department, address);
    return { id, name, email, mobileNumber, age, empID, department, address };
  });

const itemsSlice = createSlice({
  name: 'items',
  initialState: { list: [] },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadItems.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(addItem.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });
    builder.addCase(removeItem.fulfilled, (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload);
    });
    builder.addCase(updateListItem.fulfilled, (state, action) => {
        const index = state.list.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      });
    
  },
});

export default itemsSlice.reducer;