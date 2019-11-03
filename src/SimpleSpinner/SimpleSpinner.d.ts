export interface SimpleSpinnerProps {
  /**
   * Alternative color to use in the spinner, default is #F3F3F3
   */
  altColor?: string,
  /**
   * Main color to use in the spinner, default is #3498DB,
   */
  mainColor?: string;
  /**
   * Size radius of the spinner in px, default value is 25
   */
  size?: number;
}

declare const SimpleSpinner: React.ComponentType<SimpleSpinnerProps>;

export default SimpleSpinner;
