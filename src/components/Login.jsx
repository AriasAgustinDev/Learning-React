import { Input } from "./Input";
import { LoginButton } from "./LoginButton";
export function Login(){
    return(
        <form action="">
            <Input placeholderProp="Nombre"/>
            <Input placeholderProp="Contrasena"/>
            <LoginButton name="Ingresar" />    
        </form>
    );
}