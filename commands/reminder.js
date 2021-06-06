var Cron = require('cron');
var CronJob = Cron.CronJob;
const Moment = require('moment');
var jobs = [];

// var job = new CronJob('00 */10 * * * *', () => {
//   console.log('You will see this message every minute');
// }, null, true, 'Asia/Tokyo');

// var see = new CronJob('*/10 * * * * *', () => {
//   let next = job.nextDate();
//   console.log(next);
//   let diff = Math.ceil(next.diff(Moment(new Date()), 's', true));
//   let second = diff % 60;
//   let minute = Math.floor(diff / 60);
//   let hour = Math.floor(diff / (60 * 60));
//   console.log(diff, "\n", hour, minute, second);
// }, null, true, 'Asia/Tokyo');


const create = (Discord, msg, rem) => {
  console.log(msg);

  var job = new CronJob('00 */10 * * * *', () => {
    console.log('You will see this message every minute');
  }, null, true, 'Asia/Tokyo');
  jobs.push(job);

  var countdown = await msg.channel.send("Countdown:");

  if (rem) {
    var see = new CronJob('*/10 * * * * *', () => {
      let next = job.nextDate();
      console.log(next);
      let diff = Math.ceil(next.diff(Moment(new Date()), 's', true));
      let second = diff % 60;
      let minute = Math.floor(diff / 60);
      let hour = Math.floor(diff / (60 * 60));
      console.log(diff, "\n", hour, minute, second);
    }, null, true, 'Asia/Tokyo');
    jobs.push(see);
  }
};


module.exports = {
  name: 'reminder',
  aliases: ['rd'],
  description: '',
  example: '',
  cooldown: 1,
  execute(client, message, args, cmd, Discord, profileData) {
    console.log(args);
    if (args[0] === 'create' && args.length === 2) {
      create(Discord, message, args[1] === "t");
    } else if (args[0] === 'start') {
      for (job of jobs) {
        job.start();
      }
    } else if (args[0] === 'stop') {
      for (job of jobs) {
        job.stop();
      }
    }
  },
};
