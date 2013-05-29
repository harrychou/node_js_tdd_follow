desc("default task");
task("default", ["lint"], function() {
  console.log("build successful")
});

desc("lint every javascript file");
task("lint", [], function() {
   console.log("task: lint every js files ")
});
