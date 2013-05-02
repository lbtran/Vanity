/* Vanity JS */

var player = {	
				name:"",
				fitness:0,
				style:0,
				tan:0,
				moles: [],
				vanity: 0,
				daysLeft: 120,
				gender: "male",
				image: "male_style0_buff0.png",
				timeSince: {
					fitness: 0,
					style: 0,
					tan: 0
				},
				fameIndex: 0,
			};

var atrophy = {
		fitness: 3,
		style: 3,
		tan: 3
}
var characters = {
				levels: {
						fitness: [0, 6, 10],
						style: [0,6,10],
						tan: [0,3,10,15]
				},
				tan: ["male_tan_0.png", "male_tan_1.png", "male_tan_2.png", "male_tan_3.png"],
				male: {
						standard: "male_style0_buff0.png",
						buff: "male_style0_buff1.png",
						ripped: "male_style0_buff2.png",
						fashionable: "male_style1_buff0.png",
						stylish: "male_style2_buff0.png",
						buffAndFashionable: "male_style1_buff1.png",
						rippedAndFashionable: "male_style1_buff2.png",
						stylishAndBuff: "male_style2_buff1.png",
						rippedAndStylish: "male_style2_buff2.png"
				},
				female: {
						standard: "female_style0_buff0.png",
						buff: "female_style0_buff1.png",
						ripped: "female_style0_buff2.png",
						fashionable: "female_style1_buff0.png",
						stylish: "female_style2_buff0.png",
						buffAndFashionable: "female_style1_buff1.png",
						rippedAndFashionable: "female_style1_buff2.png",
						stylishAndBuff: "female_style2_buff1.png",
						rippedAndStylish: "female_style2_buff2.png"
				}
}


var activities = {
				baseline: 10,
				male: {	fitness: 
						{attributes:  
							[{image: "fitness_activity_m_0.png", caption: "A drill sargeant will make sure to give you that six pack!"},
							 {image: "fitness_activity_m_1.png", caption: "Those biceps are looking good!"},
							 {image: "fitness_activity_m_2.png", caption: "That five mile run really got your heart racing!"},
							 {image: "fitness_activity_m_3.png", caption: "A couple of hours on the treadmill will definitely get you looking good."},
							 {image: "fitness_activity_m_4.png", caption: "Lifting at the gym, there's no quicker way to good fitness."}
							 ],
						baseline: 2,
						variance: 7}, 
					  	style:
					  	{attributes: 
					  		[{image: "style_activity_m_0.png", caption: "Nice watch! That's sure to impress someone."},
					  		 {image: "style_activity_m_1.png", caption: "It took all day, but this cologne is amazing!"},
					  		 {image: "style_activity_m_2.png", caption: "Nothing like a new hairdo to reinvent yourself."},
					  		 ],
					  	baseline: 2,
					  	variance: 8},
					  	natural:
					  	{attributes:
					  		[{image: "natural_tan_activity_m_0.png", caption:"Running on the beach, that's a way one way to get a tan."},
					  		{image: "natural_tan_activity_m_1.png", caption: "The breeze on the roof was perfect for sunbathing today."}, 
					  	  	{image: "natural_tan_activity_m_2.png", caption: "A day of yard work in you bathing suit left you a few shades darker."},
		  				  	{image: "natural_tan_activity_m_3.png", caption: "Reading and sunbathing in the park- good job building your mind, too."},
	  						{image: "natural_tan_activity_m_4.png", caption: "Swimming at the beach always leaves you tan and energized, too!"},
			  				{image: "natural_tan_activity_m_5.png", caption: "You lounged by the pool all day. Good thing you didn’t fall asleep!"},
					  		],
					  	baseline: 2,
					  	variance: 5},
					  	bed:
					  		{attributes: 
					  		[{image: "tanning_bed_activity_m_0.png", caption: "That all day tanning bed coupon was a steal, and your skin looks radiant!"},
					  		 {image: "tanning_bed_activity_m_1.png", caption: "Shame the timer's up. Your positively glowing!"},
					  		 {image: "tanning_bed_activity_m_2.png", caption: "One catnap on the bed and you’ve got a nice, even tan."}
					  		 ],
					  	baseline: 5,
					  	variance: 10}
					  },
				female: {
						fitness: 
							{attributes:  

							[{image: "fitness_activity_m_0.png", caption: "A drill sargeant will make sure to give you that six pack!"},
							 {image: "fitness_activity_m_1.png", caption: "Those biceps are looking good!"},
							 {image: "fitness_activity_m_2.png", caption: "That five mile run really got your heart racing!"},
							 {image: "fitness_activity_m_3.png", caption: "A couple of hours on the treadmill will definitely get you looking good."},
							 {image: "fitness_activity_m_4.png", caption: "Lifting at the gym, there's no quicker way to good fitness."}
							 ],
						baseline: 2,
						variance: 7}, 

					  	style: 
					  		{attributes: 
					  		[{image: "style_activity_f_0.png", caption: "That perm is going to look awesome!"},
					  		 {image: "style_activity_f_1.png", caption: "It took all day, but this perfume is amazing!"},
					  		 {image: "style_activity_f_2.png", caption: "Nothing like a new hairdo to reinvent yourself."},
					  		 {image: "style_activity_f_3.png", caption: "Nothing like shopping for accessories to kick up your style!"}],
					  		baseline: 2,
					  		variance: 8},

					  	natural:
					  		{attributes: 
					  			[	{image: "natural_tan_activity_f_0.png", caption: "Running on the beach, that's one way to get a tan."}, 
					  				{image: "natural_tan_activity_f_1.png", caption: "The breeze on the roof was perfect for sunbathing today."},
		  							{image: "natural_tan_activity_f_2.png", caption: "A day of yard work in you bathing suit left you a few shades darker."},
		  							{image: "natural_tan_activity_f_3.png", caption: "Reading and sunbathing in the park- good job building your mind, too."},
			  						{image: "natural_tan_activity_f_4.png", caption: "Swimming at the beach always leaves you tan and energized, too!"},
			  						{image: "natural_tan_activity_f_5.png", caption: "You lounged by the pool all day. Good thing you didn’t fall asleep!"}
					  			  ],
						  	baseline: 2,
						  	variance: 5},

					  	bed:
					  		{attributes:  
					  		[{image: "tanning_bed_activity_f_0.png", caption: "That all day tanning bed coupon was a steal, and your skin looks radiant!"},
					  		 {image: "tanning_bed_activity_f_1.png", caption: "Shame the timer's up. Your positively glowing!"},
					  		 {image: "tanning_bed_activity_f_2.png", caption: "One catnap on the bed and you’ve got a nice, even tan."}
					  		 ],
					  	baseline: 5,
					  	variance: 10}

					  }
	}
var auditions = {
				commercial: {
						male: { 
								fail: [
										{image: "audition_commercial_fail_0.png", caption: "Tough break kid, you didn’t get the gig."},
										{image: "audition_commercial_fail_0.png", caption: "Bad luck, kid... keep at it and try again"},
										{image: "audition_commercial_fail_0.png", caption: "Those are the breaks, kid. Back to the old grindstone, and try again."},
										{image: "audition_commercial_fail_0.png", caption: "Sorry, kid. Work a little harder and try again."}
										],
								success:[
										{image: "audition_commercial_m_0.png", caption: "It may be a small gig, but you got the role in the ad. Slow and steady wins the race, kid. Keep it up."},
										{image: "audition_commercial_m_1.png", caption: "Everyone will want to use Re-Clox’s new wristwatch thanks to you. Way to get you face out there, kid."},
										{image: "audition_commercial_m_2.png", caption: "Fee-Fi-Fo-Fum Inc. wants to send you a year’s supply of their beanbag chairs. I guess they were desperate for someone to take this role, kid."},
										{image: "audition_commercial_m_3.png", caption: "You’re going to be the face selling rubber duck for Quack-Pott Co. from now on. Congratulations, kid. I guess."}
										],
							},
						female: { 
								fail: [
										{image: "audition_commercial_fail_0.png", caption: "Tough break kid, you didn’t get the gig."},
										{image: "audition_commercial_fail_0.png", caption: "Bad luck, kid... keep at it and try again"},
										{image: "audition_commercial_fail_0.png", caption: "Those are the breaks, kid. Back to the old grindstone, and try again."},
										{image: "audition_commercial_fail_0.png", caption: "Sorry, kid. Work a little harder and try again."}
										],
								success:[
										{image: "audition_commercial_f_0.png", caption: "It may be a small gig, but you got the role in the ad. Slow and steady wins the race, kid. Keep it up."},
										{image: "audition_commercial_f_1.png", caption: "Everyone will want to use Re-Clox’s new wristwatch thanks to you. Way to get you face out there, kid."},
										{image: "audition_commercial_f_2.png", caption: "Fee-Fi-Fo-Fum Inc. wants to send you a year’s supply of their beanbag chairs. I guess they were desperate for someone to take this role, kid."},
										{image: "audition_commercial_f_3.png", caption: "You’re going to be the face selling rubber duck for Quack-Pott Co. from now on. Congratulations, kid. I guess."}
										],
							},

						style: 3,
						tan: 5,
						fitness: 3,
						vanity: 10,
						days: 4,
						variance: 4
				},
				indie: {
					male: {
							fail: [
								{image: "audition_indie_fail_0.png", caption: "You may not have gotten this part, but don’t give up, kid."},
								{image: "audition_indie_fail_1.png", caption: "You were too good for a movie about talking roaches stopping terrorists anyway."},
								{image: "audition_indie_fail_2.png", caption: "Sorry, you didn’t get the part. I should have known to stay away from anything called ‘Bark-ula.’"},
								{image: "audition_indie_fail_3.png", caption: "Hate to say it, kid, but you didn’t get that Feel-Good/Survival-Horror gig."}
								],
							success: [
								{image: "audition_indie_m_0.png", caption: "You scored the role, kid. You’re names really getting out there, now."},
								{image: "audition_indie_m_1.png", caption: "I don’t know how you did it, but you managed to score a role in that Western/Sci-fi/Thriller/Rom-com. Keep it up, kid."},
								{image: "audition_indie_m_2.png", caption: "I’m not sure how big ‘JFK: Space-Time Astronaut’ will be, but you got the role anyway. Good work."},
								{image: "audition_indie_m_3.png", caption: "Good job, kid. You got the role where you save the day from the Chihuahuas from space. You’ll have a cult following in no time."}
								]
					},
					female: {
							fail: [
								{image: "audition_indie_fail_0.png", caption: "You may not have gotten this part, but don’t give up, kid."},
								{image: "audition_indie_fail_1.png", caption: "You were too good for a movie about talking roaches stopping terrorists anyway."},
								{image: "audition_indie_fail_2.png", caption: "Sorry, you didn’t get the part. I should have known to stay away from anything called ‘Bark-ula.’"},
								{image: "audition_indie_fail_3.png", caption: "Hate to say it, kid, but you didn’t get that Feel-Good/Survival-Horror gig."}
								],
							success: [
								{image: "audition_indie_f_0.png", caption: "You scored the role, kid. You’re names really getting out there, now."},
								{image: "audition_indie_f_1.png", caption: "I don’t know how you did it, but you managed to score a role in that Western/Sci-fi/Thriller/Rom-com. Keep it up, kid."},
								{image: "audition_indie_f_2.png", caption: "I’m not sure how big ‘JFK: Space-Time Astronaut’ will be, but you got the role anyway. Good work."},
								{image: "audition_indie_f_3.png", caption: "Good job, kid. You got the role where you save the day from the Chihuahuas from space. You’ll have a cult following in no time."}
								]
							},
						style: 4,
						tan: 7,
						fitness: 6,
						vanity: 22,
						days: 6,
						variance: 5

				},
				blockbuster: {
						male: { 
								fail: [
									{image: "audition_blockbuster_fail_0.png", caption: "Don’t feel too bad, kid. These are the hard ones to get."},
									{image: "audition_blockbuster_fail_0.png", caption: "They said you’re ‘just not what they’re looking for’ to star in ‘Metal Match.’"},
									{image: "audition_blockbuster_fail_1.png", caption: "They didn’t think you were lead material for ‘Game Control.’"},
									{image: "audition_blockbuster_fail_2.png", caption: "They decided someone else was better suited to lead in 'Behind the Badge: The True Faces of the Law.'"}
										],
								success: [
									{image: "audition_blockbuster_m_0.png", caption: "Way to land the lead role, kid. You’re reaching the big time, now."},
									{image: "audition_blockbuster_m_1.png", caption: "You’re doing it, kid. You got the lead in ‘Lethal Death II.’ Great work."},
									{image: "audition_blockbuster_m_2.png", caption: "‘Dino-Flight’ is definitely going to be a huge hit. Good thing that you got the lead. Keep at it, kid."},
									{image: "audition_blockbuster_m_3.png", caption: "You’re going to be the next big sensation after people see you in ‘Sundown: The Illuminated.’ You did great, kid."}
									]
							},
						female: {
								fail: [
									{image: "audition_blockbuster_fail_0.png", caption: "Don’t feel too bad, kid. These are the hard ones to get."},
									{image: "audition_blockbuster_fail_0.png", caption: "They said you’re ‘just not what they’re looking for’ to star in ‘Metal Match.’"},
									{image: "audition_blockbuster_fail_1.png", caption: "They didn’t think you were lead material for ‘Game Control.’"},
									{image: "audition_blockbuster_fail_2.png", caption: "They decided someone else was better suited to lead in 'Behind the Badge: The True Faces of the Law.'"}
										],
								success: [
									{image: "audition_blockbuster_f_0.png", caption: "Way to land the lead role, kid. You’re reaching the big time, now."},
									{image: "audition_blockbuster_f_1.png", caption: "You’re doing it, kid. You got the lead in ‘Lethal Death II.’ Great work."},
									{image: "audition_blockbuster_f_2.png", caption: "‘Dino-Flight’ is definitely going to be a huge hit. Good thing that you got the lead. Keep at it, kid."},
									{image: "audition_blockbuster_f_3.png", caption: "You’re going to be the next big sensation after people see you in ‘Sundown: The Illuminated.’ You did great, kid."}
									]
							},
						style: 7,
						tan: 9,
						fitness: 10,
						vanity: 3,
						days: 8,
						variance: 4

				},
			}

var moles = {
	tanningBed: {amount: 4, modifier: 3},
	natural: {amount: 2, modifier: 6},
	baselineSeverity: 10,
	removalTime: 10,
	images: ["mole1.png", "mole2.png", "mole3.png", "mole4.png", "mole5.png", "mole6.png", "mole7.png", "mole8.png", "mole9.png", "mole10.png", "mole11.png", "mole12.png", "mole13.png", "mole14.png", "mole15.png", "mole16.png", "mole17.png", "mole18.png", "mole19.png", "mole20.png", "mole21.png", "mole22.png", "mole23.png", "mole24.png"]
}

var fame = [{amount: 0, status: "Nobody", image: "status_nobody.png", status: "Everyone has to start somewhere, right? Land your first role, and you’ll move up to the D-list."},
			{amount: 20, status: "D Lister", image: "status_d.png", status: "So, you’ve been an extra or you’ve starred in a complete flop. Try for some more commercials and score an indie film role until you build up your rep to the C-list."},
			{amount: 42, status: "C Lister", image: "status_c.png", status: "Okay, you’ve gotten a few small roles, and people are starting to recognize your face. Keep up the good work and try to score a role in a blockbuster, and you’ll make it to the B-list."},			
			{amount: 154, status: "B Lister", image: "status_b.png", status: "Great, you’re an accomplished actor, even if your name isn’t quite a household name yet. Solidify your fame with a few more blockbusters, and you’ll reach A-list Superstardom!"},			
			{amount: 246, status: "A Lister", image: "status_a.png", status: "You did it.  You're a superstar!"}			
			];

var tips = ["Get a tan", "Get some muscles"];
var tipPrefix = [" Maybe you should work on your ", " They said you needed more ", " I bet they wanted someone with more "];

function playerAtrophy() {
	if (player.timeSince.fitness > atrophy.fitness) {
		if (player.fitness > 0) {
			player.fitness--;
		}
	}
	if (player.timeSince.style > atrophy.style) {
		if (player.style > 0) {
			player.style--;
		}
	}
	if (player.timeSince.tan > atrophy.tan) {
		if (player.tan > 0) {
			player.tan--;
		}
	}
}
function getCurrentAvatar() {
	
	if (player.gender == "male") {
		var image = characters.male.standard;
			if (player.fitness > characters.levels.fitness[1]) {
				image = characters.male.buff;
				if (player.fitness > characters.levels.fitness[2]) {
					image = characters.male.ripped;
					
						if (player.style > characters.levels.style[1]) {
							image = characters.male.rippedAndFashionable;
				
							if (player.style > characters.levels.style[2]) {
								image = characters.male.rippedAndStylish;
							}
				
						}
				
				}
				else {
					if (player.style > characters.levels.style[1]) {
						image = characters.male.buffAndFashionable;
						if (player.style > characters.levels.style[2]) {
							image = characters.male.stylishAndBuff;
						}
					}
				}
			}
			else {
				if (player.style > characters.levels.style[1]) {
					image = characters.male.fashionable;
					if (player.style > characters.levels.style[2]) {
						image = characters.male.stylish;
					}
				}
			}
		return image;
	}
	else {
		var image = characters.female.standard;
			if (player.fitness > characters.levels.fitness[1]) {
				image = characters.female.buff;
				if (player.fitness > characters.levels.fitness[2]) {
					image = characters.female.ripped;
					
						if (player.style > characters.levels.style[1]) {
							image = characters.female.rippedAndFashionable;
				
							if (player.style > characters.levels.style[2]) {
								image = characters.female.rippedAndStylish;
							}
				
						}
				
				}
				else {
					if (player.style > characters.levels.style[1]) {
						image = characters.female.buffAndFashionable;
						if (player.style > characters.levels.style[2]) {
							image = characters.female.stylishAndBuff;
						}
					}
				}
			}
			else {
				if (player.style > characters.levels.style[1]) {
					image = characters.female.fashionable;
					if (player.style > characters.levels.style[2]) {
						image = characters.female.stylish;
					}
				}
			}
		return image;
	}
}

function getTan() {
	$('div#chooseTan').show();
	$('div#gameHome').hide();
}

function getNaturalTan() {
	if (player.gender == "male") {
		var tan = getActivity(activities.male.natural);
	}
	if (player.gender == "female") {
		var tan = getActivity(activities.female.natural);
	}

	player.tan += tan.value;
	var numberOfMoles = randomInt(moles.natural.amount);
	for (var i = 0; i < numberOfMoles; i++) {
		var moleSeverity = randomInt(moles.baselineSeverity) + moles.natural.modifier;
		player.moles.push({turnsLeft: moleSeverity, age: 0});
		mole();
	}
	$('#activityDescription').html(tan.caption);
	$('#activityImage').attr('src', 'images/' + tan.image);
	$('div#makeProgress article.progress div.bar').addClass("tan");
	$('div#makeProgress article.progress img').attr('src', 'images/tan.png');

	$('div#chooseTan').hide();
	$('div#makeProgress').show();
	$('div#makeProgress article.progress div.bar .amount').animate({width:player.tan});
	$('div#gameHome article.progress div.bar.tan .amount').css('width', player.tan);

	return tan.caption;
}

function getTanningBed() {
	player.timeSince.fitness++;
	player.timeSince.style++;
	if (player.gender == "male") {
		var tan = getActivity(activities.male.bed);
	}
	else {
		var tan = getActivity(activities.female.bed);		
	}

	player.tan += tan.value;
	var numberOfMoles = randomInt(moles.tanningBed.amount);
	for (var i = 0; i < numberOfMoles; i++) {
		var moleSeverity = randomInt(moles.baselineSeverity) + moles.tanningBed.modifier;
		player.moles.push({turnsLeft: moleSeverity, age: 0});
		mole();
	}
	$('#activityDescription').html(tan.caption);
	$('#activityImage').attr('src', 'images/' + tan.image);
	$('div#makeProgress article.progress div.bar').addClass("tan");
	$('div#makeProgress article.progress img').attr('src', 'images/tan.png');

	$('div#chooseTan').hide();
	$('div#makeProgress').show();
	$('div#makeProgress article.progress div.bar .amount').animate({width:player.tan});
	$('div#gameHome article.progress div.bar.tan .amount').css('width', player.tan);

	return tan.caption;
}

function getStyle() {
	player.timeSince.fitness++;
	player.timeSince.tan++;
	if (player.gender == "male") {
		var style = getActivity(activities.male.style);
	}	
	else {
		var style = getActivity(activities.female.style);
	}
	player.style += style.value;
	$('#activityDescription').html(style.caption);
	$('#activityImage').attr('src', 'images/' + style.image);
	$('div#makeProgress article.progress div.bar').addClass("style");
	$('div#makeProgress article.progress img').attr('src', 'images/style.png');

	$('div#gameHome').hide();
	$('div#makeProgress').show();
	$('div#makeProgress article.progress div.bar .amount').animate({width:player.style});
	$('div#gameHome article.progress div.bar.style .amount').css('width', player.style);

	return style.caption;
}




function getFitness() {
	player.timeSince.style++;
	player.timeSince.tan++;
	if (player.gender == "male") {
		var fitness = getActivity(activities.male.fitness);
	}
	else {
		var fitness = getActivity(activities.female.fitness);
	}
	player.fitness += fitness.value;
	$('#activityDescription').html(fitness.caption);
	$('#activityImage').attr('src', 'images/' + fitness.image);
	$('div#makeProgress article.progress div.bar').addClass("fitness");
	$('div#makeProgress article.progress img').attr('src', 'images/fitness.png');

	$('div#gameHome').hide();
	$('div#makeProgress').show();
	$('div#makeProgress article.progress div.bar .amount').animate({width:player.fitness});
	$('div#gameHome article.progress div.bar.fitness .amount').css('width', player.fitness);

	return fitness.caption;
}

function getActivity(activity) {
	var earned = randomInt(activity.baseline)+randomInt(activity.variance);
	var selectedIndex = randomInt(activity.attributes.length);
	var action = activity.attributes[selectedIndex];
	player.daysLeft--;
	$('#daysLeft').html(player.daysLeft);
	return {value: earned, caption: action.caption, image: action.image, index: selectedIndex}
}

function getCurrentTan() {
	if (player.tan > characters.levels.tan[0]) {
		if (player.tan > characters.levels.tan[1]) {
			if (player.tan > characters.levels.tan[2]) {
				if (player.tan > characters.levels.tan[3]) {
					return characters.tan[3];
				}
			}
			else {
				return characters.tan[2];
			}
		}
		else {
			return characters.tan[1];
		}
	}
	else {
		return characters.tan[0];
	}
}
function randomInt(range) {
	return Math.floor(Math.random()*range);
}
function removeMole() {
	player.daysLeft -= moles.removalTime;
	$('#daysLeft').html(player.daysLeft);
	var moleToRemove = randomInt(player.moles.length);
	player.moles.splice(moleToRemove,1);
	$('#moles').children().eq(moleToRemove).remove();
	$('div#skinExam').hide();
	$('div#removeMole').show();

}

function removedMole() {
	$('div#removeMole').hide();
	$('div#gameHome').show();
}

function castingCall() {
	$('div#castingCall').show();
	$('div#gameHome').hide();

}

function audition(call) {
	player.timeSince.fitness++;
	player.timeSince.tan++;
	player.timeSince.style++;
	var requiredTan = call.tan + randomInt(call.variance);
	var requiredStyle = call.style + randomInt(call.variance);
	var requiredFitness = call.fitness + randomInt(call.variance);
	if (player.fitness >= requiredFitness && player.style >= requiredStyle && player.tan >= requiredTan) {
		player.vanity += call.vanity;
		if (player.gender == "male") {
			var selectedHeader = randomInt(call.male.success.length);
			$("div#castingResultHeader").html(call.male.success[selectedHeader]);
			return {success: true};
		}
		else {
			var selectedHeader = randomInt(call.female.success.length);
			$("div#castingResultHeader").html(call.female.success[selectedHeader]);
			return {success: true};			
		}
	}
	else {
		if (player.gender == "male") {
			var selectedHeader = randomInt(call.male.fail.length);
			$("div#castingResultHeader").html(call.male.fail[selectedHeader]);
		}
		else {
			var selectedHeader = randomInt(call.female.fail.length);
			$("div#castingResultHeader").html(call.female.fail[selectedHeader]);

		}
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
	selectedIndex = randomInt(call.fail.length);

	if (result.attributes.length == 1) {
		return call.fail[selectedIndex].caption + tipPrefix[tipIndex] + result.attributes[0] + ".";
	}
	if (result.attributes.length == 2) {
		return call.fail[selectedIndex].caption + tipPrefix[tipIndex] + result.attributes[0] + " and " + result.attributes[1] + ".";

	}
	if (result.attributes.length == 3) {
		return call.fail[selectedIndex].caption + tipPrefix[tipIndex] + result.attributes[0] + ", " + result.attributes[1] + " and " + result.attributes[2] + ".";

	}

}
function auditionForIndie() {
	var result = audition(auditions.indie);
	player.daysLeft -= auditions.indie.days;
	getFameStatus();	
	$('#daysLeft').html(player.daysLeft);
	var selectedIndex;
	if (result.success) {
		if (player.gender == "male") {
			selectedIndex = randomInt(auditions.indie.male.success.length);
			$('p#castingResult').html(auditions.indie.male.success[selectedIndex].caption);
			$('img#auditionImage').attr('src', 'images/' + auditions.indie.male.success[selectedIndex].image);

		}
		else {
			selectedIndex = randomInt(auditions.indie.female.success.length);
			$('p#castingResult').html(auditions.indie.female.success[selectedIndex].caption);
			$('img#auditionImage').attr('src', 'images/' + auditions.indie.female.success[selectedIndex].image);
		}
	}
	else {
		if (player.gender == "male") {
			selectedIndex = randomInt(auditions.indie.female.success.length);			
			$('p#castingResult').html(getTip(auditions.indie.male, result));
			$('img#auditionImage').attr('src', 'images/' + auditions.indie.male.fail[selectedIndex].image);
		}
		else {
			selectedIndex = randomInt(auditions.indie.female.success.length);
			$('p#castingResult').html(getTip(auditions.indie.female, result));			
			$('img#auditionImage').attr('src', 'images/' + auditions.indie.female.fail[selectedIndex].image);
		}
	}
	showAudition();

}

function auditionForCommercial() {
	var result = audition(auditions.commercial);
	player.daysLeft -= auditions.commercial.days;
	$('#daysLeft').html(player.daysLeft);
	getFameStatus();
	var selectedIndex;
	if (result.success) {
		if (player.gender == "male") {
			selectedIndex = randomInt(auditions.commercial.male.success.length);
			$('p#castingResult').html(auditions.commercial.male.success[selectedIndex].caption);
			$('img#auditionImage').attr('src', 'images/' + auditions.commercial.male.success[selectedIndex].image);
		}
		else {
			selectedIndex = randomInt(auditions.commercial.female.success[selectedIndex].length);
			$('p#castingResult').html(auditions.commercial.female.success[selectedIndex].caption);			
			$('img#auditionImage').attr('src', 'images/' + auditions.commercial.female.success[selectedIndex].image);

		}
	}
	else {
		if (player.gender == "male") {
			selectedIndex = randomInt(auditions.commercial.male.fail.length);
			$('p#castingResult').html(getTip(auditions.commercial.male, result));
			$('img#auditionImage').attr('src', 'images/' + auditions.commercial.male.fail[selectedIndex].image);

		}
		else {
			selectedIndex = randomInt(auditions.commercial.female.fail.length);
			$('p#castingResult').html(getTip(auditions.commercial.female, result));			
			$('img#auditionImage').attr('src', 'images/' + auditions.commercial.female.fail[selectedIndex].image);
		}
	}
	showAudition();
}

function auditionForBlockbuster() {
	var result = audition(auditions.blockbuster);
	player.daysLeft -= auditions.blockbuster.days;
	getFameStatus();
	$('#daysLeft').html(player.daysLeft);

	var selectedIndex;
	if (result.success) {
		if (player.gender == "male") {
			selectedIndex = randomInt(auditions.blockbuster.male.success.length);
			$('p#castingResult').html(auditions.blockbuster.male.success[selectedIndex].caption);
			$('img#auditionImage').attr('src', 'images/' + auditions.blockbuster.male.success[selectedIndex].image);
		}
		else {
			selectedIndex = randomInt(auditions.blockbuster.female.success.length);
			$('p#castingResult').html(auditions.blockbuster.female.success[selectedIndex]);
			$('img#auditionImage').attr('src', 'images/' + auditions.blockbuster.female.success[selectedIndex].image);

		}
	}
	else {
		if (player.gender =="male") {
			selectedIndex = randomInt(auditions.commercial.female.fail.length);
			$('p#castingResult').html(getTip(auditions.commercial.male, result));			
			$('img#auditionImage').attr('src', 'images/' + auditions.commercial.male.fail[selectedIndex].image);
		}
		else {
			selectedIndex = randomInt(auditions.blockbuster.female.fail.length);
			$('p#castingResult').html(getTip(auditions.blockbuster.female, result));
			$('img#auditionImage').attr('src', 'images/' + auditions.blockbuster.female.fail[selectedIndex].image);

		}
	}
	showAudition();	

}

function castingResultReceived() {
	playerAtrophy();
	$('div#castingCallResult').hide();
	if(dayPassedDidIDie()) {
		obituary();
	}
	else {
		$('div#gameHome').show();
	}	
}
function progressResultReceived() {
	playerAtrophy();
	$('div#makeProgress').hide();
	if(dayPassedDidIDie()) {
		obituary();
	}
	else {
		$('div#gameHome').show();
	    $('div#makeProgress article.progress div.bar').attr('class', 'bar');

	}

}
function showAudition() {
	$('div#castingCall').hide();
	$('div#castingCallResult').show();

}
function dontAudition() {
	$('div#castingCall').hide();
	$('div#gameHome').show();
}
function noExam() {
	$('div#skinExam').hide();
	$('div#gameHome').show();

}

function getFameStatus() {
	var statusImg = $('img#status');
	var avatar = $('.player .avatar img');
	var avatarTan = $('.player .tan img');
	avatar.attr('src', 'images/' + getCurrentAvatar());
	avatarTan.attr('src', 'images/' + getCurrentTan());
	for (var i = 0; i < fame.length; i++) {
		if (player.vanity >= fame[i].amount) {
			fameIndex = i;
			statusImg.attr("src", "images/" + fame[i].image);
			statusImg.attr("alt", fame[i].status);
			statusImg.attr("title", fame[i].status);
			if (fame[i].status == "A Lister") {
				obituary();
			}
		}
	}
	$('#fameStatus p').html(fame[player.fameIndex].status);
}

function dayPassedDidIDie() {
	var melanoma = false;
	for (var i = 0; i < player.moles.length; i++) {
		player.moles[i].age++;
		if (player.moles[i].turnsLeft - player.moles[i].age <= 0) {
			melanoma = true;
		}
	}
	return melanoma;
}
function chooseGender() {
	$('div#intro').hide();
	$('div#chooseGender').show();

}
function startGameAsMale() {
	player.gender = "male";
	startGame();
}
function startGameAsFemale() {
	player.gender = "female";
	startGame();
}

function startGame() {
	$('div#chooseGender').hide();
	player.name = $("input[name=playerName]").val();
	var headerHTML = "<a onclick='getStatus()'><div class='player'><div class='tan'><img src=''></div><div class='avatar'><img src=''></div></div><img src='images/status_nobody.png' alt='status' title='status' id='status'/></a><h1>"+player.name+", you've got <span id='daysLeft'>"+player.daysLeft+"</span> Days to get famous!</h1><div id='moles'></div>";
	$('header.welcome').html(headerHTML);
	getFameStatus();
	$('div#gameHome').show();
}

function doctorsOffice() {
	$('div#gameHome').hide();
	$('div#skinExam').show();

}
function getStatus() {
	getFameStatus();	
	$('div#fameStatus h2').html(player.status);
	$('div#gameHome').hide();
	$('div#fameStatus').show();

}
function sawStatus() {
	$('div#fameStatus').hide();
	$('div#gameHome').show();

}

function mole() {
	var mNum = randomInt(moles.images.length);
	var newMole = $('#moles').append("<div class='mole'><img src='images/"+moles.images[mNum]+"'/></div>");
	newMole.children(".mole").last().css({
									position: 'absolute',
									left: randomInt(newMole.width()),
									top: randomInt(newMole.height())
									});
}

function obituary() {
	$("header.welcome h1").html("Time's up " + player.name);
	$('div#gameHome').hide();
	$('div#final').show();
}
function learnAbout() {
	$('div#gameHome').hide();
	$('div#about').show();

}
function enoughAbout() {
	$('div#about').hide();
	$('div#gameHome').show();
}

function playAgain() {
	player.fitness = 0;
	player.style = 0;
	player.tan = 0;
	player.moles = [];
	player.vanity = 0;
	player.daysLeft = 120;
	$('div#makeProgress article.progress div.bar .amount').animate({width:0});
	$('div#gameHome article.progress div.bar.tan .amount').css('width', 0);	
	$('div#gameHome article.progress div.bar.fitness .amount').css('width', 0);	
	$('div#gameHome article.progress div.bar.style .amount').css('width', 0);	
	$('div#final').hide();
	startGame();
}
