/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import { MDCFoundation } from '@material/base/foundation';
import { MDCToolbarAdapter } from './adapter';
export declare class MDCToolbarFoundation extends MDCFoundation<MDCToolbarAdapter> {
    static readonly cssClasses: {
        FIXED: string;
        FIXED_AT_LAST_ROW: string;
        FIXED_LASTROW: string;
        FLEXIBLE_DEFAULT_BEHAVIOR: string;
        FLEXIBLE_MAX: string;
        FLEXIBLE_MIN: string;
        TOOLBAR_ROW_FLEXIBLE: string;
    };
    static readonly strings: {
        CHANGE_EVENT: string;
        FIRST_ROW_SELECTOR: string;
        ICON_SELECTOR: string;
        TITLE_SELECTOR: string;
    };
    static readonly numbers: {
        MAX_TITLE_SIZE: number; /** The ratio of max scrollTop that we should listen to to row height. */
        MIN_TITLE_SIZE: number;
        TOOLBAR_MOBILE_BREAKPOINT: number;
        TOOLBAR_ROW_HEIGHT: number;
        TOOLBAR_ROW_MOBILE_HEIGHT: number;
    };
    static readonly defaultAdapter: MDCToolbarAdapter;
    private checkRowHeightFrame_;
    private scrollFrame_;
    private executedLastChange_;
    private isFixed_;
    private isFixedLastRow_;
    private hasFlexibleFirstRow_;
    private useFlexDefaultBehavior_;
    private calculations_;
    private resizeHandler_;
    private scrollHandler_;
    constructor(adapter?: Partial<MDCToolbarAdapter>);
    init(): void;
    destroy(): void;
    updateAdjustElementStyles(): void;
    private getFlexibleExpansionRatio_;
    private checkRowHeight_;
    private setKeyHeights_;
    private updateToolbarStyles_;
    private scrolledOutOfThreshold_;
    private initKeyRatio_;
    private getRowHeight_;
    private updateToolbarFlexibleState_;
    private updateToolbarFixedState_;
    private updateFlexibleRowElementStyles_;
    private updateElementStylesDefaultBehavior_;
}
export default MDCToolbarFoundation;
