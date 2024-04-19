
let Data = " YOu can see this";


class User  {

    constructor(name,email) {
        this.name = name;
        this.email = email;

    }
    viewdata() {
        console.log("data =", Data);
    }
}

class admin  extends User {
    constructor(name,email) {
        super(name,email)
    }
   
    editdata() {

        Data = "this iz different u may see inside";
    }
}

let student1 = new User("ravi", "ravipanimgaya@gmail.com");
let student2 = new User("jogi", "jogibaba@gmail.com");

let teacher1 = new User("dada", " DadaBoss@rediff.com");

let admin1 = new admin("RealGangsta", "gangBang@outlook.com");

