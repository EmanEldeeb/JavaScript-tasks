'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Eman Eldeeb',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Alaa Ahmed',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Ahmed Ali',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Ali',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const dateLable=document.querySelector(".date")
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//create userName
let currentUser=''; 
let currentTran=''
function userNameGenrator(accounts){
  accounts.forEach(account => {
  account.userName=account.owner.toLowerCase().split(" ").map(word=>word[0]).join("")
    
  });
}
userNameGenrator(accounts)
//login
btnLogin.addEventListener("click",logging)
function logging(e){
      e.preventDefault()

     
      if( hasUser(inputLoginUsername,inputLoginPin)){
                
        containerApp.style.opacity=1;
        displayMovements(currentUser);
        displayCurrentBlance(currentUser);
        displayCalcSummary(currentUser);
        displayDate();
         //calculated from login-> logout
         logout()
         ///used for requesting loans ->save the orignal movment
          currentTran=currentUser.movements.slice();
        
       
      }
      updateUi(inputLoginPin,inputLoginUsername)
      
       
     
}
//user existance
function hasUser(userNameInp,userPinInp){
  const requestingUser=userNameInp.value;
  const requestingUserPin=+userPinInp.value;
  const exsits=accounts.find(acc=> acc.userName===requestingUser&&acc.pin===requestingUserPin);
    currentUser=exsits;
   return exsits != undefined ? true :false
}
//logout
function logout() {
  let timeout = 5 * 60 * 1000; 
  setTimeout(() => {
    containerApp.style.opacity = 0;
    clearInterval(timerId)
  }, timeout);
  const timerId= setInterval(() => {
    timeout -= 1000;
    const minutes = Math.floor(timeout / (60 * 1000));
    const seconds = Math.ceil((timeout % (60 * 1000)) / 1000);
    labelTimer.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }, 1000);
}


//upate input fields values 
function updateUi(...ele){
  ele.forEach(e=>{
    e.value=""
    e.blur()
  })

}


//display movements
function displayMovements(account){
  containerMovements.innerHTML=""
  // const arrMove=sortMovements() ?? currentUser.movements;
  account.movements.forEach((mov,i)=>{
    let status=mov>0?"deposit":"withdrawal"
    const div=document.createElement("div")
    div.className="movements__row"
    const move=`
      <div class="movements__type movements__type--${status}">${i+1} ${status}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${Math.abs(mov)}$</div>`
    div.innerHTML=move
    containerMovements.prepend(div);   
  })
}

// calculate current blance
function displayCurrentBlance(account){
    const blance= account.movements.reduce((acc,current)=>acc+current)
    labelBalance.textContent=`${blance}$`
}
// current date
function displayDate(){
  let today=new Date()
  today=today.getFullYear()+"/"+(today.getMonth()+1)+"/"+today.getDate()
  dateLable.textContent=today
}


//function calculate summary
function  displayCalcSummary(account){
    const deposit=account.movements.filter(mov=>mov>0).reduce((acc,current)=>acc+current);
    const withdrawal=account.movements.filter(mov=>mov<0).reduce((acc,current)=>Math.abs(acc+current));
    const interest=deposit*0.1;
    labelSumIn.textContent=`${deposit}$`;
    labelSumOut.textContent=`${withdrawal}$`;
    labelSumInterest.textContent=`${Math.round(interest).toFixed(3)}$`;
}
//Close  account 
btnClose.addEventListener("click",closeAccount);
function closeAccount(e){
  e.preventDefault()
  const userDelete=inputCloseUsername.value;
  const pin=+inputClosePin.value;
  if( hasUser(inputCloseUsername,inputClosePin) && currentUser.userName == userDelete && pin== currentUser.pin ){
    const userIndex=accounts.findIndex(acc=>acc.userName ===userDelete);
    accounts.splice(userIndex,1);
    containerApp.style.opacity=0;}
    updateUi(inputCloseUsername,inputClosePin);
}
//transfer money
btnTransfer.addEventListener("click",transferMoney);
function transferMoney(e){
  e.preventDefault()
  const transferToName=inputTransferTo.value;
  const transferAmount=+inputTransferAmount.value;
  const exsits=accounts.find(acc=> acc.userName===transferToName);
  const currentUserBalance=parseInt(labelBalance.textContent);
  if(exsits && currentUserBalance >transferAmount && exsits.userName !== currentUser.userName){
      exsits.movements.push(transferAmount);
      currentUser.movements.push(-transferAmount);
      displayMovements(currentUser);
      displayCurrentBlance(currentUser);
      displayCalcSummary(currentUser);
      displayDate();

  }
  updateUi(inputTransferTo,inputTransferAmount);
}
// Request loan
btnLoan.addEventListener("click",requestLoan)
function requestLoan(e){
  e.preventDefault()
  const maxTran=currentTran.reduce((acc,current)=>acc>current?acc:current);
  const requestedLoanval=parseInt(inputLoanAmount.value);
  if(requestedLoanval*.1<=maxTran){
    currentUser.movements.push(requestedLoanval);
    displayMovements(currentUser);
    displayCurrentBlance(currentUser);
    displayCalcSummary(currentUser);
    displayDate();
  }
  updateUi(inputLoanAmount)
}
// sorting movements
btnSort.addEventListener("click",sortMovements);
function sortMovements(){ 
  currentUser?.movements?.sort((a,b)=>a-b);
  displayMovements(currentUser);
}

/////////////////////////////////////////////////
