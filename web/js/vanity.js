/* Vanity JS */

var player = {	
				name:"",
				fitness:0,
				style:0,
				tan:0,
				moles: [],
				vanity: 0,
				daysLeft: 120
			};

var activities = {
				baseline: 10,
				fitness: ["Nice walk", "Nice run", "Nice biceps"],
				style: ["Nice hat", "nice sunglasses", "nice shoes"],
				natural:["A day of beach volleyball was just what you needed to leave you glowing.", "You lounged by the pool all day. Good thing you didn’t fall asleep!", "Reading and sunbathing in the park- good job building your mind, too.", "The breeze on the roof was perfect for sunbathing today.", "Swimming at the beach always leaves you tan and energized, too!", "A day of yard work in you bathing suit left you a few shades darker.", "Listening to your favorite playlist was a great way to spend the day in the sun."],
				bed: ["Shame they didn’t let you stay in longer. You positively glowing!", "Maybe you stayed in a bit too long. Your skin feels a little tight...", "Your skin is now golden brown perfection!", "One catnap on the bed and you’ve got a nice, even tan."]
}
var auditions = {
				commercial: {
						fail: ["Tough break kid, you didn’t get the gig.", "Bad luck, kid... keep at it and try again", "Those are the breaks, kid. Back to the old grindstone, and try again.", "Sorry, kid. Work a little harder and try again."],
						success:["It may be a small gig, but you got the role in the ad. Slow and steady wins the race, kid. Keep it up.", "Everyone will want to use Re-Clox’s new wristwatch thanks to you. Way to get you face out there, kid.","Fee-Fi-Fo-Fum Inc. wants to send you a year’s supply of their beanbag chairs. I guess they were desperate for someone to take this role, kid.", "You’re going to be the face selling rubber duck for Quack-Pott Co. from now on. Congratulations, kid. I guess."],
						style: 5,
						tan: 5,
						fitness: 5,
						vanity: 1,
						days: 5,
				},
				indie: {
						fail: ["You may not have gotten this part, but don’t give up, kid.", "You were too good for a movie about talking roaches stopping terrorists anyway.", "Sorry, you didn’t get the part. I should have known to stay away from anything called ‘Bark-ula.’", "Hate to say it, kid, but you didn’t get that Feel-Good/Survival-Horror gig."],
						success: ["You scored the role, kid. You’re names really getting out there, now.", "I don’t know how you did it, but you managed to score a role in that Western/Sci-fi/Thriller/Rom-com. Keep it up, kid.", "I’m not sure how big ‘JFK: Space-Time Astronaut’ will be, but you got the role anyway. Good work.", "Good job, kid. You got the role where you save the day from the Chihuahuas from space. You’ll have a cult following in no time."],
						style: 10,
						tan: 10,
						fitness: 10,
						vanity: 2,
						days: 6,

				},
				blockbuster: {
						fail: ["Don’t feel too bad, kid. These are the hard ones to get.", "“They said you’re ‘just not what they’re looking for’ to star in ‘Metal Match.’", "They didn’t think you were lead material for ‘Game Control.’", "They decided someone else was better suited to lead in 'Behind the Badge: The True Faces of the Law.'"],
						success: ["Way to land the lead role, kid. You’re reaching the big time, now.", "You’re doing it, kid. You got the lead in ‘Lethal Death II.’ Great work.", "‘Dino-Flight’ is definitely going to be a huge hit. Good thing that you got the lead. Keep at it, kid.", "You’re going to be the next big sensation after people see you in ‘Sundown: The Illuminated.’ You did great, kid."],
						style: 15,
						tan: 15,
						fitness: 15,
						vanity: 3,
						days: 8,

				},
				variance: 4,
				success: ["You got the part!", "You did it!", "Success!", "Congratulations!", "Good News!"],
				failure: ["Maybe next time", "Better luck next time...", "Sorry", "Bad News"],
			}

var moles = {
	tanningBed: {amount: 4, modifier: 3},
	natural: {amount: 2, modifier: 6},
	baselineSeverity: 10
}


var tips = ["Get a tan", "Get some muscles"];
var tipPrefix = [" Maybe you should work on your ", " They said you needed more ", " I bet they wanted someone with more "];
function getTan() {
	$('div#chooseTan').show();
	$('div#gameHome').hide();
}

function getNaturalTan() {
	var tan = getActivity(activities.natural);
	player.tan += tan.value;
	var numberOfMoles = randomInt(moles.natural.amount);
	for (var i = 0; i < numberOfMoles; i++) {
		var moleSeverity = randomInt(moles.baselineSeverity) + moles.natural.modifier;
		player.moles.push({turnsLeft: moleSeverity, age: 0})
	}
	$('#activityDescription').html(tan.caption);
	$('#activityImage').attr('src', 'images/tan_activity_'+tan.index+'.png');
	$('div#makeProgress article.progress div.bar').addClass("tan");
	$('div#makeProgress article.progress img').attr('src', 'images/tan.png');

	$('div#chooseTan').hide();
	$('div#makeProgress').show();
	$('div#makeProgress article.progress div.bar .amount').animate({width:player.tan});
	setTimeout(function() {
		$('div#gameHome article.progress div.bar.tan .amount').css('width', player.tan);
		$('div#makeProgress').hide();
		$('div#gameHome').show();
	    $('div#makeProgress article.progress div.bar').removeClass("tan");
    }, 3000);

	return tan.caption;
}

function getTanningBed() {
	var tan = getActivity(activities.bed);
	player.tan += tan.value;
	var numberOfMoles = randomInt(moles.tanningBed);
	for (var i = 0; i < numberOfMoles; i++) {
		var moleSeverity = randomInt(moles.baselineSeverity) + moles.tanningBed.modifer;
		player.moles.push({turnsLeft: moleSeverity, age: 0})
	}
	$('#activityDescription').html(tan.caption);
	$('#activityImage').attr('src', 'images/tan_activity_'+tan.index+'.png');
	$('div#makeProgress article.progress div.bar').addClass("tan");
	$('div#makeProgress article.progress img').attr('src', 'images/tan.png');

	$('div#chooseTan').hide();
	$('div#makeProgress').show();
	$('div#makeProgress article.progress div.bar .amount').animate({width:player.tan});
	setTimeout(function() {
		$('div#gameHome article.progress div.bar.tan .amount').css('width', player.tan);
		$('div#makeProgress').hide();
		$('div#gameHome').show();
	    $('div#makeProgress article.progress div.bar').removeClass("tan");
    }, 3000);

	return tan.caption;
}

function getStyle() {
	var style = getActivity(activities.style);
	player.style += style.value;
	$('#activityDescription').html(style.caption);
	$('#activityImage').attr('src', 'images/style_activity_'+style.index+'.png');
	$('div#makeProgress article.progress div.bar').addClass("style");
	$('div#makeProgress article.progress img').attr('src', 'images/style.png');

	$('div#gameHome').hide();
	$('div#makeProgress').show();
	$('div#makeProgress article.progress div.bar .amount').animate({width:player.style});
	setTimeout(function() {
		$('div#gameHome article.progress div.bar.style .amount').css('width', player.style);
		$('div#makeProgress').hide();
		$('div#gameHome').show();
	    $('div#makeProgress article.progress div.bar').removeClass("style");
    }, 3000);
	return style.caption;
}




function getFitness() {
	var fitness = getActivity(activities.fitness);
	player.fitness += fitness.value;
	$('#activityDescription').html(fitness.caption);
	$('#activityImage').attr('src', 'images/fitness_activity_'+fitness.index+'.png');
	$('div#makeProgress article.progress div.bar').addClass("fitness");
	$('div#makeProgress article.progress img').attr('src', 'images/fitness.png');

	$('div#gameHome').hide();
	$('div#makeProgress').show();
	$('div#makeProgress article.progress div.bar .amount').animate({width:player.fitness});
	setTimeout(function() {
		$('div#gameHome article.progress div.bar.fitness .amount').css('width', player.fitness);
		$('div#makeProgress').hide();
		$('div#gameHome').show();
	    $('div#makeProgress article.progress div.bar').removeClass("fitness");
    }, 3000);

	return fitness.caption;
}

function getActivity(activity) {
	var earned = randomInt(activities.baseline)+1;
	var selectedIndex = randomInt(activity.length);
	var action = activity[selectedIndex];
	player.daysLeft--;
	$('#daysLeft').html(player.daysLeft);
	return {value: earned, caption: action, index: selectedIndex}
}

function randomInt(range) {
	return Math.floor(Math.random()*range);
}
function removeMole() {
	player.moles.splice(randomInt(player.moles.length),1);
}

function castingCall() {
	$('div#castingCall').show();
	$('div#gameHome').hide();

}

function audition(call) {
	var requiredTan = call.tan + randomInt(auditions.variance);
	var requiredStyle = call.style + randomInt(auditions.variance);
	var requiredFitness = call.fitness + randomInt(auditions.variance);
	if (player.fitness >= requiredFitness && player.style >= requiredStyle && player.tan >= requiredTan) {
		player.vanity += call.vanity;
		var selectedHeader = randomInt(auditions.success.length);
		$("div#castingResultHeader").html(auditions.success[selectedHeader]);
		return {success: true};
	}
	else {
		var selectedHeader = randomInt(auditions.failure.length);
		$("div#castingResultHeader").html(auditions.success[selectedHeader]);
		var attributesNeeded = [];
		if (player.tan < requiredTan) {
			attributesNeeded.push("tan");
		}
		if (player.fitness < requiredFitness) {
			attributesNeeded.push("fitness");
		}
		if (player.style < requiredStyle) {
			attributesNeeded.push("style");
		}
		return {success:false, attributes: attributesNeeded};
	}
}

function getTip(call, result) {
	var tipIndex = randomInt(tipPrefix.length);

	selectedIndex = randomInt(auditions.indie.fail.length);
	if (result.attributes.length == 1) {
		return call.fail[selectedIndex] + tipPrefix[tipIndex] + result.attributes[0] + ".";
	}
	if (result.attributes.length == 2) {
		return call.fail[selectedIndex] + tipPrefix[tipIndex] + result.attributes[0] + " and " + result.attributes[1] + ".";

	}
	if (result.attributes.length == 3) {
		return call.fail[selectedIndex] + tipPrefix[tipIndex] + result.attributes[0] + ", " + result.attributes[1] + " and " + result.attributes[2] + ".";

	}

}
function auditionForIndie() {
	var result = audition(auditions.indie);
	player.daysLeft -= auditions.indie.days;
	$('#daysLeft').html(player.daysLeft);
	var selectedIndex;
	if (result.success) {
		selectedIndex = randomInt(auditions.indie.success.length);
		$('p#castingResult').html(auditions.indie.success[selectedIndex]);
	}
	else {
		$('p#castingResult').html(getTip(auditions.indie, result));
	}
	showAudition();
	setTimeout(function() {
		$('div#castingCallResult').hide();
		$('div#gameHome').show();
    }, 3000);

}

function auditionForCommercial() {
	var result = audition(auditions.commercial);
	player.daysLeft -= auditions.commercial.days;
	$('#daysLeft').html(player.daysLeft);

	var selectedIndex;
	if (result.success) {
		selectedIndex = randomInt(auditions.commercial.success.length);
		$('p#castingResult').html(auditions.commercial.success[selectedIndex]);
	}
	else {
		$('p#castingResult').html(getTip(auditions.commercial, result));
	}
	showAudition();
	setTimeout(function() {
		$('div#castingCallResult').hide();
		$('div#gameHome').show();
    }, 3000);

}

function auditionForBlockbuster() {
	var result = audition(auditions.blockbuster);
	player.daysLeft -= auditions.blockbuster.days;
	$('#daysLeft').html(player.daysLeft);

	var selectedIndex;
	if (result.success) {
		selectedIndex = randomInt(auditions.blockbuster.success.length);
		$('p#castingResult').html(auditions.blockbuster.success[selectedIndex]);
	}
	else {
		$('p#castingResult').html(getTip(auditions.blockbuster, result));
	}
	showAudition();
	setTimeout(function() {
		$('div#castingCallResult').hide();
		$('div#gameHome').show();
    }, 3000);

}
function showAudition() {
	$('div#castingCall').hide();
	$('div#castingCallResult').show();

}
function dontAudition() {
	$('div#castingCall').hide();
	$('div#gameHome').show();
}

function startGame() {
	player.name = $("input[name=playerName]").val();
	var headerHTML = "<img src='images/status_nobody.png' alt='status' title='status'/><h1>"+player.name+", you've got <span id='daysLeft'>"+player.daysLeft+"</span> Days to get famous!</h1>";
	$('header.welcome').html(headerHTML);
	$('div#intro').hide();
	$('div#gameHome').show();
}

function doctorsOffice() {
	$('div#gameHome').hide();
	$('div#skinExam').show();

}

