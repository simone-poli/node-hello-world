import chalk from "chalk"
import axios from "axios"


console.log(chalk.bgBlue("Hello Boolean"))
axios.get("https://lanciweb.github.io/demo/api/pictures/")
.then(response =>{
    console.log(response.data)
})