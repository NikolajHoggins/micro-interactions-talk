const DELAY = 2000;

export default async function updateUser(name: string) {
  return new Promise((resolve, reject) => {
    if (!name || name === "") {
      setTimeout(() => reject("Name is required"), DELAY);
    }
    if (name === "hoggins") {
      setTimeout(() => reject("Name already taken"), DELAY);
    }
    setTimeout(resolve, DELAY);
  });
}
