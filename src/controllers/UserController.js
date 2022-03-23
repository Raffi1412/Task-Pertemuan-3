/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
// CODE HERE
import users from "../data/users.js";

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */

 const formatUser = (title) => {
    const output = users.map((user) => {
            const usersData = {
            name: title + ". " + user.name,
            age: user.age,
            major: user.major
        };
        return usersData

    });
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(output);
        }, 3000);
    });
};


/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
const findByName = (name) => {
    const findName = users.find ((user) => {
        return user.name === name;
    });
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(findName);
        }, 2000);
    });
};

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
const filterByMajor = (major) => {
    const tampung = users.filter ((user) => {
        return user.major === major
    });

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(tampung);
        }, 3000);
    });
};

    

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE
export default{formatUser, findByName, filterByMajor};