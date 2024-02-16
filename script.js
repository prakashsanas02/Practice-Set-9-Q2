const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
          let script = document.createElement("script")
          script.src = src
          script.onload = () => {
                  resolve(src + " Done Successfully")
          }
          document.head.append(script)
  })
}


const main2 = async () => {
  console.log(new Date().getMilliseconds())
    let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
      console.log(a)
        console.log(new Date().getMilliseconds())
}
  main2()