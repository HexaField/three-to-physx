const PhysX = require('physx-js')()

PhysX.onRuntimeInitialized = () => {
  PhysX.loaded = true
  console.log('PhysX ready!')
  for(let key of Object.keys(PhysX)) {
      console.log(key)
  }
  console.log(PhysX.PX_PHYSICS_VERSION)
}
