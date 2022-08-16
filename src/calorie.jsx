'use strict';

import React from "react";

const Calorie = () => {
    return (
        <div className="calorie-container">
            <h1>Calorie Information</h1>
            <table>
                <tr>
                    <th>Dish</th>
                    <th>Portions</th>
                    <th>Calories (Per Portion)</th>
                </tr>
                <tr>
                    <td>Avocado Shrimp Roll</td>
                    <td>3</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Catering Platter Large</td>
                    <td>75</td>
                    <td>Varies (average 75)</td>
                </tr>
                <tr>
                    <td>Catering Platter Small</td>
                    <td>50</td>
                    <td>Varies (average 75)</td>
                </tr>
                <tr>
                    <td>Crunchy Shrimp Roll</td>
                    <td>3</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Garlic Ponzu Salmon Sushi</td>
                    <td>3</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Sampler Platter Large</td>
                    <td>15</td>
                    <td>Varies (average 66)</td>
                </tr>
                <tr>
                    <td>Sampler Platter Small</td>
                    <td>10</td>
                    <td>Varies (average 66)</td>
                </tr>
                <tr>
                    <td>Philadelphia Roll</td>
                    <td>3</td>
                    <td>150</td>
                </tr>
                <tr>
                    <td>Rainbow Roll</td>
                    <td>5</td>
                    <td>75</td>
                </tr>
                <tr>
                    <td>Salmon Steak</td>
                    <td>2</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>Salmon Sushi</td>
                    <td>3</td>
                    <td>45</td>
                </tr>
                <tr>
                    <td>Sashimi Roll</td>
                    <td>3</td>
                    <td>55</td>
                </tr>
                <tr>
                    <td>Spicy Tuna Roll</td>
                    <td>3</td>
                    <td>95</td>
                </tr>
                <tr>
                    <td>Tobiko Roll</td>
                    <td>3</td>
                    <td>45</td>
                </tr>
                <tr>
                    <td>Tuna Sushi</td>
                    <td>3</td>
                    <td>55</td>
                </tr>
                <tr>
                    <td>Wagyu Beef Sushi</td>
                    <td>3</td>
                    <td>75</td>
                </tr>
            </table>
        </div>
    )
};

export default Calorie;