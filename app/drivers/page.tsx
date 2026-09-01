import React from 'react'
import DriverHero from './DriverHero'
import WhatIsDriver from './WhatIsDriver'
import DriverInstallationGuide from './DriverInstallationGuide'
import DriverCommonIssues from './DriverCommonIssues'

function page() {
  return (
    <>
    <DriverHero />
    <WhatIsDriver />
    <DriverInstallationGuide />
    <DriverCommonIssues />
    </>
  )
}

export default page