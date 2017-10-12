class Driver {
  constructor (name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return (endDate - this.startDate.getFullYear() - 1)
  }
}

class Route {

  constructor(start, end) {
    this.start = start
    this.end = end
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let hor_dist = Math.abs(eastWest.indexOf(this.end.horizontal) - eastWest.indexOf(this.start.horizontal))
    let ver_dist = Math.abs(this.end.vertical - this.start.vertical)
    let total = hor_dist + ver_dist
    return total
  }

  estimatedTime(peak){
    if (peak) {
      return (this.blocksTravelled()/2)
    } else {
      return (this.blocksTravelled()/3)
    }
  }

}
