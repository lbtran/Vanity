/* Vanity JS */

var player = {	
				name:"",
				fitness:0,
				style:0,
				tan:0,
				moles: [],
				vanity: 0
			};

var activities = {
				fitness: ["Nice walk", "Nice run", "Nice biceps"],
				style: ["Nice hat", "nice sunglasses", "nice shoes"],
				natural:["A day of beach volleyball was just what you needed to leave you glowing.", "You lounged by the pool all day. Good thing you didn’t fall asleep!", "Reading and sunbathing in the park- good job building your mind, too.", "The breeze on the roof was perfect for sunbathing today.", "Swimming at the beach always leaves you tan and energized, too!", "A day of yard work in you bathing suit left you a few shades darker.", "Listening to your favorite playlist was a great way to spend the day in the sun."],
				bed: ["Shame they didn’t let you stay in longer. You positively glowing!", "Maybe you stayed in a bit too long. Your skin feels a little tight...", "Your skin is now golden brown perfection!", "One catnap on the bed and you’ve got a nice, even tan."],
				commercial: {
						fail: ["Tough break kid, you didn’t get the gig.", "Bad luck, kid... keep at it and try again", "Those are the breaks, kid. Back to the old grindstone, and try again.", "Sorry, kid. Work a little harder and try again."],
						success:["It may be a small gig, but you got the role in the ad. Slow and steady wins the race, kid. Keep it up.", "Everyone will want to use Re-Clox’s new wristwatch thanks to you. Way to get you face out there, kid.","Fee-Fi-Fo-Fum Inc. wants to send you a year’s supply of their beanbag chairs. I guess they were desperate for someone to take this role, kid.", "You’re going to be the face selling rubber duck for Quack-Pott Co. from now on. Congratulations, kid. I guess."]
				},
				indie: {
						fail: ["You may not have gotten this part, but don’t give up, kid.", "You were too good for a movie about talking roaches stopping terrorists anyway.", "Sorry, you didn’t get the part. I should have known to stay away from anything called ‘Bark-ula.’", "Hate to say it, kid, but you didn’t get that Feel-Good/Survival-Horror gig."],
						success: ["You scored the role, kid. You’re names really getting out there, now.", "I don’t know how you did it, but you managed to score a role in that Western/Sci-fi/Thriller/Rom-com. Keep it up, kid.", "I’m not sure how big ‘JFK: Space-Time Astronaut’ will be, but you got the role anyway. Good work.", "Good job, kid. You got the role where you save the day from the Chihuahuas from space. You’ll have a cult following in no time."]
				},
				blockbuster: {
						fail: ["Don’t feel too bad, kid. These are the hard ones to get.", "“They said you’re ‘just not what they’re looking for’ to star in ‘Metal Match.’", "They didn’t think you were lead material for ‘Game Control.’", "They decided someone else was better suited to lead in 'Behind the Badge: The True Faces of the Law.'"],
						success: ["Way to land the lead role, kid. You’re reaching the big time, now.", "You’re doing it, kid. You got the lead in ‘Lethal Death II.’ Great work.", "‘Dino-Flight’ is definitely going to be a huge hit. Good thing that you got the lead. Keep at it, kid.", "You’re going to be the next big sensation after people see you in ‘Sundown: The Illuminated.’ You did great, kid."]
				}
}

var tips = ["Get a tan", "Get some muscles"];

function getNaturalTan() {
	var tan = getActivity(activities.natural);
	player.tan += tan.value;
	var numberOfMoles = randomInt(2);
	for (var i = 0; i < numberOfMoles; i++) {
		var moleSeverity = randomInt(10) + 6;
		player.moles.push({turnsLeft: moleSeverity, age: 0})
	}
	return tan.caption;
}

function getTanningBed() {
	var tan = getActivity(activities.bed);
	player.tan += tan.value;
	var numberOfMoles = randomInt(4);
	for (var i = 0; i < numberOfMoles; i++) {
		var moleSeverity = randomInt(10) + 3;
		player.moles.push({turnsLeft: moleSeverity, age: 0})
	}
	return tan.caption;
}

function getStyle() {
	var style = getActivity(activities.style);
	player.style += style.value;
	return style.caption;
}

function getFitness() {
	var fitness = getActivity(activities.fitness);
	player.fitness += fitness.value;
	return fitness.caption;
}

function getActivity(activity) {
	var earned = randomInt(10)+1;
	var action = activity[randomInt(activity.length)];
	return {value: earned, caption: action}
}

function randomInt(range) {
	return Math.floor(Math.random()*range);
}
function removeMole() {
	player.moles.splice(randomInt(player.moles.length),1);
}

function castingCall() {
	
}
