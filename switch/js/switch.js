(function() {
	var Tsdy_Switch = window.Tsdy_Switch = function(list) {
		var x = document.getElementsByClassName('Tsdy-switch');
		this.swi = [];
		for (var i = 0; i < x.length; i++) {
			this.swi.push(x[i]);
		}
		this.swi.forEach((item, key) => {
			var node = document.createElement('div');
			node.className = "ori";
			item.classList = "Tsdy-switch switch_ori";
			item.appendChild(node);
			node = null;
		});
		this.init(list);
	};
	Tsdy_Switch.prototype.init = function(list) {
		var self = this;
		self.swi.forEach((item, key) => {
			let judge = false;
			item.addEventListener('click', function() {
				judge = !judge;
				if (judge) {
					this.classList = "Tsdy-switch switch_fin";
					this.children[0].className = "fin";
				} else {
					this.classList = "Tsdy-switch switch_ori";
					this.children[0].className = "ori";
				}
				list[key].forEach(item => {
					item(judge);
				});
			});
		});

	}

})();

// this.swi.addEventListener('click',()=>{
// 					if(self.judge){
// 						self.swi.classList = "Tsdy-switch switch_fin";
// 						self.swi.children[0].className = "fin";
// 						list.forEach(item => {
// 							item(self.judge);
// 						})
// 					} else{
// 						self.swi.classList = "Tsdy-switch switch_ori";
// 						self.swi.children[0].className = "ori";
// 						list.forEach(item => {
// 							item(self.judge);
// 						})
// 					}	
// 					self.judge = !self.judge;	
// 				});
