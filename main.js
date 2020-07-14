{
    let paragraph = "    \t\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam earum ea dignissimos architecto fuga perferendis aperiam facere dolores vitae et.";

    console.log(paragraph.substring(6, 11));
    console.log(paragraph.substr(6, 5));
    console.log(paragraph.toLocaleUpperCase());
    //use trim for validation, to make sure the user doesnt leave spaces before or after entry of details
    console.log(paragraph.trim());

    let waiting ="tick tock";
    console.log(waiting.repeat(20));

    //delimeters are separaters
    //use split to get the text presented as arrays as individual entities
    console.log(paragraph.split(" "));
    //use replace to match things or confirm the correct format for email or phone number
    console.log(paragraph.replace());
}

//functions and objects
{
    let position = {
        //properties are the values or the members of the object
        x: 10,
        y: 20,
        //method
        print: function(){
            console.log(`x: ${this.x}, y: ${this.y}`);
        },
        //the coma above is to show that there is something else within the object
        myObject: {sweetProperty: "Hello Friends"}
    }
    
    //function outside an object is a bit diffent
    let newx = 15;
    let newy = 25;

    function printing(){
        console.log(`newx: ${this.newx} newy: ${this.newy}`);
    }
    //calling the function
    //the value of "this" in a function outside an object returns undefined
    printing();

    console.log(position);
    // calling the methid in the object position
    position.print();
    //this is how you call a nested object
    position.myObject.sweetProperty;

    //method are doing somthing
    //a method is simply a function that is attavched to the object

    //nested objects are simply objects within
}

//json : js object notation... us e it when working with websites through an api

//conditions if, else, else if
{
    var name = prompt();
    if(name === "Caleb"){//identity operator // strict
        console.log("welcome");
    
    }else if(name === "sally"){
        console.log("karibu sana");
    }else{
        console.log("wrong name");
    }
}

//benefit of control flow
//generalization: means our program works in various situation
//this helps when users try doing things they shouldnt in your app, hackers, otherspressing buttons they shouldnt

//comparison operators
//!== meaning not equal to
//>== greater than or equal to

//logical operators
//or ||, and &&, not !
{
    var age = prompt("Age?");
    var name = prompt("Your Name?");
    // or means if any of the two conditions are true
    if (age <13 || age >= 65){
        console.log("Welcome!");
    }
    //and means they both have to be true for the execution to happen
    if (age <13 && age >= 65){
        console.log("Welcome!");
    }
    //you can put the "!" to show not equal to like this
    if (age <13 && !(age >= 65)){
        console.log("Welcome!");
    }
}

// switch statement
{
    let name = prompt("Your name please?");

    switch(name){
        case "aleb":
            console.log("welcome bro!");
            break;
        case "Sally":
            console.log("come kesho");
            break;
        default:
            console.log("party still on yooh!!");
            break;
    }
}
//you can also have the cases one after the other

{
    let name = prompt("Your name please?");

    switch(name){
        case "aleb":
        case "Sally":
            console.log("come kesho");
            break;
        default:
            console.log("party still on yooh!!");
            break;
    }
}

//single line if statement
{
    let name = prompt("What's your name yoh?");
    if (name ==="Claire") console.log("Hello");
}
//the habbit of the carly braces also helps incase you get confused with the normal way of writing single line if statements
//if (name ==="Claire") {console.log("Hello");}

//Ternary operator
