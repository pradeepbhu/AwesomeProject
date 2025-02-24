import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  { name: 'items.db', location: 'default' },
  () => console.log('Database opened'),
  error => console.error(error)
);

export const initializeDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS items (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          email TEXT,
          mobileNumber TEXT,
          age INTEGER,
          empID TEXT,
          department TEXT,
          address TEXT
        );`,
        [],
        () => resolve(),
        (_, err) => reject(err)
      );
    });
  });
};

export const insertItem = (name, email, mobileNumber, age, empID, department, address) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO items (name, email, mobileNumber, age, empID, department, address)
         VALUES (?, ?, ?, ?, ?, ?, ?);`,
        [name, email, mobileNumber, age, empID, department, address],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
};

export const fetchItems = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM items;',
        [],
        (_, result) => resolve(result.rows.raw()),
        (_, err) => reject(err)
      );
    });
  });
};

export const deleteItem = id => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM items WHERE id = ?;',
        [id],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
};

export const updateItem = (id, name, email, mobileNumber, age, empID, department, address) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE items
         SET name = ?, email = ?, mobileNumber = ?, age = ?, empID = ?, department = ?, address = ?
         WHERE id = ?;`,
        [name, email, mobileNumber, age, empID, department, address, id],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
};