import { Pipe, PipeTransform } from "@angular/core";
const change = 27235.8;
@Pipe({
  name: "btcToUsd",
})
export class BtcToUsdPipe implements PipeTransform {
  transform(amount: number, isBtcToUsd = true): number {
    if (isBtcToUsd) return amount * change;
    return amount / change;
  }
}
