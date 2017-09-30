var liftSection = new Vue({
  el: '#liftsTable',
  data: {
    lifts: [
      { name: 'squat', reps: 0, weight: 0, oneRepMax: 0}, 
      { name: 'bench', reps: 0, weight: 0, oneRepMax: 0},
      { name: 'deadlift', reps: 0, weight: 0, oneRepMax: 0},
      { name: 'press', reps: 0, weight: 0, oneRepMax: 0}
    ]
  },
  methods: {
    calcOneRepMax: function (lift, reps, weight) {
      reps = parseInt(reps);
      weight = parseInt(weight);
      lift.oneRepMax = Math.round(weight * reps * 0.0333 + weight);
      
      return lift.oneRepMax;
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
});
