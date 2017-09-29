var liftSection = new Vue({
  el: '#lift',
  data: {
    lifts: [
      { name: 'squat', reps: 0, weight: 0}, 
      { name: 'bench', reps: 0, weight: 0},
      { name: 'deadlift', reps: 0, weight: 0},
      { name: 'press', reps: 0, weight: 0}
    ]
  },
  methods: {
    calcOneRepMax: function (reps, weight) {
      reps = parseInt(reps);
      weight = parseInt(weight);
      return  Math.round(weight * reps * 0.0333 + weight);
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
