var liftSection = new Vue({
  el: '#liftsTable',
  data: {
    lifts: [
      { name: 'press', reps: 0, weight: 0, oneRepMax: 0, trainingMax: 0},
      { name: 'deadlift', reps: 0, weight: 0, oneRepMax: 0, trainingMax: 0},
      { name: 'bench', reps: 0, weight: 0, oneRepMax: 0, trainingMax: 0},
      { name: 'squat', reps: 0, weight: 0, oneRepMax: 0, trainingMax: 0}
    ],
    scheme: [
      { reps: ['5', '5', '5+'], weight: [.65, .75, .85] },
      { reps: ['3', '3', '3+'], weight: [.70, .80, .90] },
      { reps: ['5', '3', '1+'], weight: [.75, .85, .95] },
      { reps: ['5', '5', '5'], weight: [.40, .50, .60] }
    ],
    useTrainingMax: true
  },
  methods: {
    calcOneRepMax: function (lift, reps, weight) {
      reps = parseInt(reps);
      weight = parseInt(weight);
      // 1RM Formula taken from Wendler's 5/3/1
      lift.oneRepMax = weight * reps * 0.0333 + weight;
      // Wendler defines training maximum is 90% of 1RM
      lift.trainingMax = .90 * lift.oneRepMax;
      return lift.oneRepMax;
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  liftingRound: function(value) {
    // Round up or down to nearest 5 so value can be represented with lifting plates
    if (!value) return 0;
    value = parseInt(value);
    var plateMod = value % 5;
    // If distance from plate weight is 0-2, e.g. 110-112lbs
    if (plateMod < 2) {
      // Round down
       return value - plateMod;
    } 
    // Otherwise round up
    return value + (5 - plateMod);
  }
}
});
