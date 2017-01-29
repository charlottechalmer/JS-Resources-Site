$('#availableTags').popover();

$("#codingCommunityNav").click(function(){
	$('.alertPlaceholder').html('');
	if ($('.tagSearchResult').hasClass('show')) {
		$('.tagSearchResult').addClass('hide').removeClass('show');
	}
	$(".codingCommunity").css({"display": "block"});
	$(".learnToCode").css({"display": "none"});
	$(".frameworkDocu").css({"display": "none"});
	$(".practiceProbs").css({"display": "none"});
	$(".interviewResources").css({"display": "none"});
	$(".bigOResources").css({"display": "none"});
	$(".stylingResources").css({"display": "none"});
	$(".miscResources").css({"display": "none"});
	$(".devBooks").css({"display": "none"});
	
});

$("#learnToCodeNav").click(function(){
	$('.alertPlaceholder').html('');
	if ($('.tagSearchResult').hasClass('show')) {
		$('.tagSearchResult').addClass('hide').removeClass('show');
	}
	$(".codingCommunity").css({"display": "none"});
	$(".learnToCode").css({"display": "block"});
	$(".frameworkDocu").css({"display": "none"});
	$(".practiceProbs").css({"display": "none"});
	$(".interviewResources").css({"display": "none"});
	$(".bigOResources").css({"display": "none"});
	$(".stylingResources").css({"display": "none"});
	$(".miscResources").css({"display": "none"});
	$(".devBooks").css({"display": "none"});
});

$("#frameworkDocNav").click(function(){
	$('.alertPlaceholder').html('');
	if ($('.tagSearchResult').hasClass('show')) {
		$('.tagSearchResult').addClass('hide').removeClass('show');
	}
	$(".codingCommunity").css({"display": "none"});
	$(".learnToCode").css({"display": "none"});
	$(".frameworkDocu").css({"display": "block"});
	$(".practiceProbs").css({"display": "none"});
	$(".interviewResources").css({"display": "none"});
	$(".bigOResources").css({"display": "none"});
	$(".stylingResources").css({"display": "none"});
	$(".miscResources").css({"display": "none"});
	$(".devBooks").css({"display": "none"});
});

$("#practiveProbsNav").click(function(){
	$('.alertPlaceholder').html('');
	if ($('.tagSearchResult').hasClass('show')) {
		$('.tagSearchResult').addClass('hide').removeClass('show');
	}
	$(".codingCommunity").css({"display": "none"});
	$(".learnToCode").css({"display": "none"});
	$(".frameworkDocu").css({"display": "none"});
	$(".practiceProbs").css({"display": "block"});
	$(".interviewResources").css({"display": "none"});
	$(".bigOResources").css({"display": "none"});
	$(".stylingResources").css({"display": "none"});
	$(".miscResources").css({"display": "none"});
	$(".devBooks").css({"display": "none"});
});

$("#interviewNav").click(function(){
	$('.alertPlaceholder').html('');
	if ($('.tagSearchResult').hasClass('show')) {
		$('.tagSearchResult').addClass('hide').removeClass('show');
	}
	$(".codingCommunity").css({"display": "none"});
	$(".learnToCode").css({"display": "none"});
	$(".frameworkDocu").css({"display": "none"});
	$(".practiceProbs").css({"display": "none"});
	$(".interviewResources").css({"display": "block"});
	$(".bigOResources").css({"display": "none"});
	$(".stylingResources").css({"display": "none"});
	$(".miscResources").css({"display": "none"});
	$(".devBooks").css({"display": "none"});
});

$("#bigONav").click(function(){
	$('.alertPlaceholder').html('');
	if ($('.tagSearchResult').hasClass('show')) {
		$('.tagSearchResult').addClass('hide').removeClass('show');
	}
	$(".codingCommunity").css({"display": "none"});
	$(".learnToCode").css({"display": "none"});
	$(".frameworkDocu").css({"display": "none"});
	$(".practiceProbs").css({"display": "none"});
	$(".interviewResources").css({"display": "none"});
	$(".bigOResources").css({"display": "block"});
	$(".stylingResources").css({"display": "none"});
	$(".miscResources").css({"display": "none"});
	$(".devBooks").css({"display": "none"});
});

$("#styleNav").click(function(){
	$('.alertPlaceholder').html('');
	if ($('.tagSearchResult').hasClass('show')) {
		$('.tagSearchResult').addClass('hide').removeClass('show');
	}
	$(".codingCommunity").css({"display": "none"});
	$(".learnToCode").css({"display": "none"});
	$(".frameworkDocu").css({"display": "none"});
	$(".practiceProbs").css({"display": "none"});
	$(".interviewResources").css({"display": "none"});
	$(".bigOResources").css({"display": "none"});
	$(".stylingResources").css({"display": "block"});
	$(".miscResources").css({"display": "none"});
	$(".devBooks").css({"display": "none"});
});

$("#miscNav").click(function(){
	$('.alertPlaceholder').html('');
	if ($('.tagSearchResult').hasClass('show')) {
		$('.tagSearchResult').addClass('hide').removeClass('show');
	}
	$(".codingCommunity").css({"display": "none"});
	$(".learnToCode").css({"display": "none"});
	$(".frameworkDocu").css({"display": "none"});
	$(".practiceProbs").css({"display": "none"});
	$(".interviewResources").css({"display": "none"});
	$(".bigOResources").css({"display": "none"});
	$(".stylingResources").css({"display": "none"});
	$(".miscResources").css({"display": "block"});
	$(".devBooks").css({"display": "none"});
});

$("#booksNav").click(function(){
	$('.alertPlaceholder').html('');
	if ($('.tagSearchResult').hasClass('show')) {
		$('.tagSearchResult').addClass('hide').removeClass('show');
	}
	$(".codingCommunity").css({"display": "none"});
	$(".learnToCode").css({"display": "none"});
	$(".frameworkDocu").css({"display": "none"});
	$(".practiceProbs").css({"display": "none"});
	$(".interviewResources").css({"display": "none"});
	$(".bigOResources").css({"display": "none"});
	$(".stylingResources").css({"display": "none"});
	$(".miscResources").css({"display": "none"});
	$(".devBooks").css({"display": "block"});
});

$('#searchButton').click(function() {
	$('.alertPlaceholder').html('');
	var str = $('#searchInput').val();
		$('#searchInput').val("");
		str = str.toLowerCase();
		str = str.replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g,"");
		str = str.replace(/\s+/g, "-");

	if ($(".tagSearchResult").hasClass("hide")) {
		$('.tagSearchResult').addClass('show').removeClass('hide');
	}
	$(".codingCommunity").css({"display": "none"});
	$(".learnToCode").css({"display": "none"});
	$(".frameworkDocu").css({"display": "none"});
	$(".practiceProbs").css({"display": "none"});
	$(".interviewResources").css({"display": "none"});
	$(".bigOResources").css({"display": "none"});
	$(".stylingResources").css({"display": "none"});
	$(".miscResources").css({"display": "none"});
	$(".devBooks").css({"display": "none"}); 

	$('.tagSearchResult').empty();
	$("." + str).clone().appendTo('.tagSearchResult');
	if($('.tagSearchResult').children().length === 0) {
		$('.alertPlaceholder').html('<div class = "alert alert-danger alert-dismissable"> <button type = "button" class = "close" data-dismiss = "alert" aria-hidden = "true"> &times; </button>   Error! No resources with that tag. Please try again.</div>');
	}

});

$('#searchInput').keypress(function(e) {
	if(e.which == 13) {
		$('#searchButton').click();
	}
});
