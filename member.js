function skillsMember() {
return {
    templateUrl:'modules/skills/views/members.html',
    controller:'skillsMembersController',
    controllerAs:'vm',
    bindToController:true,
    scope:{
        member:'='
    }
};
}