const isR18Plus = (age) => {
    return new Promise((resolve, reject) => {
        if(age > 18) resolve("anda sudah dewasa")
        else reject("anda masih dibawah umur")
    })
}
const printR18Plus = async () => {
  const underAge = await isR18Plus(10).then(a => a).catch(a => a);
  const properAge = await isR18Plus(19).then(a => a).catch(a => a);

  console.log(underAge);
  console.log(properAge);
}

printR18Plus();