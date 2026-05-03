type UserRole = "admin" | "user"

const getDashboard = (role:UserRole)=>{
    if(role === "admin"){
        return "get admin"
    }else if(role === "user"){
        return "get user"
    }else{
        return "guest "
    }
}