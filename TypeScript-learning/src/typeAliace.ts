type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string
    };
    gender: "male" | "female";
    contactNo: string;
    address: {
        division: string;
        city: string;
    }


};

const user1: User = {
    id: 123,
    name: {
        firstName: "ahmmed",
        lastName: "hossain"
    },
    gender: "male",
    contactNo: "017222",
    address: {
        division: "chottogram",
        city: "chottogram",
    }


}


type isAdmin = true;

const isAdmin : isAdmin = true;

type AddFunc = (num1:number, num2:number) => number

const add : AddFunc = (num1 , num2) => num1 + num2;