abstract class TakePhoto2 {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    //some complex calculation
    return 8;
  }
}

// const kiri = new TakePhoto2("test", "test");
//we cant create a object from an abstract class

class Instagram2 extends TakePhoto2 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("sepia");
  }
}
const kiri2 = new Instagram2("test", "test", 3);
//now it is valid no problem
