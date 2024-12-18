.hero{
    min-height: 90vh;
    background:  linear-gradient(180deg, #fde1ff, #e1ffea22 60%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 9%;
}
.hero-left{
    line-height: 1.1;
}
.hero-left h2{
    color: #090909;
    font-size: 18px;
}

.hero-left p{
    color: #171717;
    font-size: 80px;   
    font-weight: 700;
}
.hero-hand-icon{
    display: flex;
    align-items: center;
    gap: 20px;
}
.hero-hand-icon img{
    width: 70px;
}
.hero-latest-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 220px;
    height: 50px;
    border-radius: 75px;
    margin-top: 20px;
    background: #ff4141;
    color: white;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
}
.hero-latest-btn img{
    width: 16px;
}

.hero-right img{
    width: 450px;
}

@media(max-width:1200px){
    
    .hero{
        padding: 10px 6%;
    }
    .hero-left p{
        font-size: 70px;
    }
    .hero-right img{
        width: 400px;
    }
   
}
@media(max-width:900px){
   
    .hero-left p{
        font-size: 45px;
    }
    .hero-right img{
        width: 350px;
    }
   
}
@media(max-width:700px){
   .hero{
    padding: 0 10%;
    min-height: 95vh;
   }
    .hero-left p{
        font-size: 55px;
    }
    .hero-right{
        display: none;
    }
    .hero-left{
        line-height: 1.2;
    }
    .hero-left h2{
        margin-bottom: 20px;
    }
  
    .hero-latest-btn{
        margin-top: 30px;
    }
}
