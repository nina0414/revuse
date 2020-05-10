

function listController(){
	var listvalue,creatdiv,s;
	listvalue= document.getElementById('add').value;
	
	
	if(listvalue=== ''|| !isNaN(listvalue)){
		document.querySelector('.warning').innerHTML='Confirm format';
		document.getElementById('add').value = '';
	}else{
		
		    creatdiv = document.createElement('LI');
	        creatdiv.innerHTML= `<li> ${listvalue}
                         <p class='times'></p>
                        <button  class='btndone' onclick='addcount()' >Done </button>
						<button  class='btndel' >Delete </button>
						</li>`;
	    document.querySelector('.list-content').appendChild(creatdiv);
	    creatdiv.className = 'list-event';
		document.getElementById('add').value = '';
		document.querySelector('.warning').innerHTML='';
		
		function addcount(){
	   var addcounts ;
	   var ensurecount = 0;
	  var ensure,i;
	   ensure =document.getElementsByClassName("btndone");
	   for(i = 0; i < ensure.length; i++){
		ensure[i].onclick = function(){
		ensurecount = ensurecount+1;
		addcounts = ensurecount;
		document.querySelector('.done').innerHTML = addcounts;
		addcounts = this.parentElement;
	    addcounts.style.backgroundColor= '#ff9f43';
		
			
		}
	};
	 
		  } addcount();
		

		
		
		
	
	function deletebtn(){
		var btnd,i,div;
		btnd = document.getElementsByClassName("btndel");
     
     for (i = 0; i < btnd.length; i++) {
     btnd[i].onclick =function() {
         div = this.parentElement;
         div.style.display = "none";
		
		 
        }
     }
		}deletebtn();
		
	}
	
	
	
	
	
	
	
	};




	


function toptime(){
	var a,b,c,d;
	a = document.querySelector('.time');
	b = new Date().getFullYear();
	c = new Date().getMonth()+1;
	d = new Date().getDate();
    a.innerHTML = `${b}/${c}/${d}`;
	
	
};



(function ctrl(){
	listController();
	
	toptime();
})();

/*
	
	*/