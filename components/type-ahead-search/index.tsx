import { FC } from "react"; 

export interface ITypeAheadProps {
    input: any;
    group: string[];
}

export const TypeAhead: FC<ITypeAheadProps> = ({ input, group }) => {
    
    console.log(input);
    console.log(group);
    
    
    return (

        <>
        </>
    );
}
