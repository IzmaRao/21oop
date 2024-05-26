import inquirer from "inquirer";
import chalk from "chalk";



class Personality{
    person_personality: string;
    constructor(n:string){
        this.person_personality = n;
    }
}

class Person_Name{
    person_name: Personality[] = []
    add_Person(obj:Personality) {
        this.person_name.push(obj)
    }
}



const person_names = new Person_Name();

const programStart1 = async (person_names:Person_Name) => {
    console.log(chalk.bold.underline.blackBright(`Welcome!`))
    const ans = await inquirer.prompt([
        {
            name: "Select",
            type: "list",
            message:chalk.green("Which personality you have?"),
            choices: [chalk.cyan("Introvert"),chalk.magenta("Extrovert"),chalk.grey("Mystery")]
        }
    ]);

    // conditions
    if(ans.Select == "Introvert"){
        console.log(`You are ${ans.Select}`)
    }
    else if(ans.Select == "Extrovert"){
        console.log(`You are ${ans.Select}`)
    }
    else if(ans.Select == "Mystery"){
        console.log(`You are ${ans.Select}`)
    }

    const asking_Name = await inquirer.prompt([
        {
            name: "asking_name",
            type: "input",
            message: chalk.yellow("What is your name?"),
        }
    ]);
    // conditions
    if(asking_Name){
        console.log(`Your Name is ` +  chalk.greenBright.bold.underline(asking_Name.asking_name) + ` and your personality is ` + chalk.bold.underline(ans.Select) )
    }

}

programStart1(person_names);
