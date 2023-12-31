#ageValue, #height,#weight{
    
    width: 230px;
    background-color: black;
    color: white;
}
#calcbtn{
    width: 230px;
    background-image: linear-gradient(to right, rgb(125, 114, 159) , rgb(177, 148, 148));
    color: white;
    margin-left: 70px;
    padding: 5px;
    margin-bottom: 15px;
    border: none;
    border-radius: 20px;
    text-transform: uppercase;
    font-family: monospace;
}
#calcbtn:active{
    opacity: 0.7;
}

    *{
        padding: 0;
        margin: 0;
    }

    .div1{
        display: flex;
        flex-direction: column;
        width: 450px;
        background-color: rgb(255, 255, 255);
    }
    .maindiv{
        
       
        width:900px;
        background-color: rgb(255, 255, 255);
        margin: 50px;
        margin-left: 200px;
        
    }
    body{
       
        background-image: linear-gradient(to right, rgb(178, 171, 200) , rgb(211, 181, 181));
    overflow:scroll;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center center;
    margin: 0px;
    padding: 0px;
    height: 700px;
    overflow-x: hidden;
    }
    :root{
        --primary-color: black;
        /* --primary-color:#07afd9; */
    }
    *{
        box-sizing: border-box;
        font-family: sans-serif;
    }
    


.neontile{
    position: relative;
    height: 3rem;
    width:5rem;
    margin-right:1rem;
}
.neontile input{
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 0;
    cursor: pointer;
    z-index: 2;
    opacity: 0;
}
.labelu{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    transition: all 300ms ease;
}
ion-icon{  
    color:var(--primary-color) ;
    font-size: 3rem;
}
.neontile label{
color: var(--primary-color);
font-size: 0.80rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1px;
}
input:checked + .labelu{
    background-color: var(--primary-color);
    /* box-shadow: 0 0 12px var(--primary-color); */
}
input:hover + .labelu{
    box-shadow: 0 0 12px var(--primary-color);
}
input:checked + .labelu ion-icon,
input:checked + .labelu label {
    color: white;
}