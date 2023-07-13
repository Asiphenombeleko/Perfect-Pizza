

function amountSmall(){

   return{
      amount : 0,
      medAmount : 0,
      lrgAmount :0,

      totalCosts : 0,


      incrementSmall() {
         this.amount += 49.00;
      },
      
      decrementSmall(){
         if(this.amount > 0){
            this.amount-= 49.00
         } 
      },

      incrementMedium(){
         this.medAmount += 89.00;
      },

      decrementMedium(){
         if(this.medAmount > 0){
            this.medAmount -= 89.00
         }
      },

      incrementLarge(){
         this.lrgAmount += 129.00
      },

      decrementLarge(){
         if(this.lrgAmount > 0){
            
            this.lrgAmount -= 129.00
         }
      },

      totalCost(){
         if(incrementSmall()){
            totalCosts.push(amount)
         }
      }
   }
}

document.addEventListener('alpine:init', ()=> {
   Alpine.data('amountSmall',amountSmall)
})






