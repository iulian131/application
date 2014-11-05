angular.module("app")
.directive("dialog", function($compile){
	return {
		replace: true,
		transclude: true,
		restrict: 'E',
		scope: true,
		templateUrl: 'directives/dialog/dialogView.html',
		link: function(scope, element){
			var transclude = element.find(".transclude");
			var roles = {
				title: 'h1',
				body: 'hr+div',
				buttons: '.buttons'
			}
			
			for(var role in roles){
				if(roles.hasOwnProperty(role)){
					$compile(transclude.find("section[role='"+role+"']").children())(scope).appendTo(element.find(roles[role]));
				}
			}
			
			transclude.remove();
		}
	};
});