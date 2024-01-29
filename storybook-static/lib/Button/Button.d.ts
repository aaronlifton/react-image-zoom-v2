import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The color of the button.
     */
    color?: 'primary' | 'success' | 'info' | 'warning' | 'error';
    /**
     * The size of the button.
     */
    size?: 'small' | 'medium' | 'large';
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map