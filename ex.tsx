// Disposable Mixin
class Disposable {
    isDisposed!: boolean
    dispose() {
      this.isDisposed = true
    }
  }
  
  // Activatable Mixin
  class Activatable {
    isActive!: boolean
    activate() {
      this.isActive = true
    }
    deactivate() {
      this.isActive = false
    }
  }