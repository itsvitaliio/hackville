intent('Hello world', p => {
    p.play('Hi there');
});

intent("(open|view) (the|my) schedule", p => {
       p.play({ command: 'open-schedule'})
})

intent("(close) (the|my) schedule", p => {
       p.play({ command: 'close-schedule'})
})

intent("I want to add a reminder", async p => {
    p.play("Sounds good! What do you want to add?");
    const booking = await p.then(userInput);
    p.play({command: "booking", value: booking});
    p.play(`Your reminder is: ${booking}`);
});

const userInput = context(() => {
    intent("$(I* .+)", p => p.resolve(p.I));
})

intent(`I have a $(D  math|english|engineering|computer science|psychology|art|music) class (on|) $(DATE) (at|) $(TIME)`, p => {
    p.play(`Adding to your schedule: Reminder ${p.D.value} class on ${p.DATE} at ${p.TIME}`)
})

intent(`I have $(X  math|english|engineering|computer science|psychology|art|music) homework  (due on|) $(DATE) (at|) $(TIME)`, p => {
    p.play(`Adding to your schedule: Reminder ${p.X.value} homework due on ${p.DATE} at ${p.TIME}`)
})