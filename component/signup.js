function signup(){
   return `<div class="container1">

   <div class="container2">
            <div class="k">
                <div class="image">
                    <img height="40px" width="30px" src="data:image/png;base64,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" alt="">
                </div>
                
                <div style="margin-left: 20px;">
                   <p class="big">MANAGE YOUR ORDERS</p>
                   Track orders, manage cancellations & returns.
                </div>
              
            </div>
            <div class="k">
                <div class="image">
                   <img height="40px" width="30px" src="https://cdn4.vectorstock.com/i/1000x1000/13/38/flat-office-paper-notepad-circle-icon-with-long-vector-5531338.jpg" alt="">
                </div>
                
                <div style="margin-left: 20px;">
                   <p class="big">SHORTLIST ITEMS YOU LOVE</p>
                   Keep items you love on a watchlist.
                </div>
              
            </div >
            <div class="k">
                <div class="image">
                   <img height="40px" width="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHePoPVswLqULL33vZ0DE1uuZQovhpcYEvIeWQMup7gNjQ7zQO0lkminDcaR-fE7Vq1I&usqp=CAU" alt="">
                </div>
               
                <div style="margin-left: 20px;">
                   <p class="big">AWESOME OFFERS UPDATES</p>
                   Be first to know about great offers and save.
                </div>
            
            </div>
   </div>
   <div class="container">

       <div class="pero">
           <p style="font-size: 25px;">Login/Sign Up On Snapdeal</p>
           <p >Please provide your Mobile Number or Email to Login/ Sign Up on Snapdeal</p>
       </div>
   <div class="lo">
       <input type="text" placeholder="Mobile Number/Email" class="email">
       <br>
       <button id="con">Continue</button>
   </div>
  
   <div style="margin-left: 170px;margin-top: 20px;">
       <p >or using</p>
   </div>
   <div id="pp">
       
      
           
           <div >
               
                   <button class="fb">
                       
                       <img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-White-Dark-Background-Logo.wine.svg" width="70%" height="100%" alt="">
                   
                          
               
               
                  
               </button>
           </div>
      
      
       <div>
           <button class="gg">
       
           <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" width="20%" height="80%" alt="">
           </button>
       </div>   
      
       
          
   </div>
   </div>
   
</div>`
}

// otp page

function getotp(){
    return `<div class="container1">
    <div class="container2">
        <div class="k">
            <div class="image">
<img height="40px" width="30px" src="data:image/png;base64,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" alt="">
            </div>
            
            <div style="margin-left: 20px;">
               <p class="big">MANAGE YOUR ORDERS</p>
               Track orders, manage cancellations & returns.
            </div>
          
        </div>
        <div class="k">
            <div class="image">
               <img height="40px" width="30px" src="https://cdn4.vectorstock.com/i/1000x1000/13/38/flat-office-paper-notepad-circle-icon-with-long-vector-5531338.jpg" alt="">
            </div>
            
            <div style="margin-left: 20px;">
               <p class="big">SHORTLIST ITEMS YOU LOVE</p>
               Keep items you love on a watchlist.
            </div>
          
        </div >
        <div class="k">
            <div class="image">
               <img height="40px" width="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHePoPVswLqULL33vZ0DE1uuZQovhpcYEvIeWQMup7gNjQ7zQO0lkminDcaR-fE7Vq1I&usqp=CAU" alt="">
            </div>
           
            <div style="margin-left: 20px;">
               <p class="big">AWESOME OFFERS UPDATES</p>
               Be first to know about great offers and save.
            </div>
        
        </div>
</div>
<div class="container">


    <div class="pero">
        <p style="font-size: 25px;">Signup on Snapdeal</p>

        
    </div>
    <div id="lego">
       
    </div>

    <div id="ooo">
        <input type="text" id="ooob" placeholder="Code">
        
    </div>
    <div id="pushpa">
        Resend OTP
    </div>
    <div class="lo">
        
        <button id="con">Continue</button>
    </div>
</div>
</div>`
}

export {signup,getotp}