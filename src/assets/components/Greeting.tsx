 type GreetProps = {
    isLoggedin: boolean;
};

export const Greet = ({ isLoggedin }: GreetProps) => {
    return (
        <div>
            {isLoggedin ? <h1>Welcome Back!</h1> : <h1>Please Sign Up</h1>}
        </div>
    );
};  
