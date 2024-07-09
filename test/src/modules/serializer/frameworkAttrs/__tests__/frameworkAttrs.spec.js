/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { createElement } from 'lwc';
import FrameworkAttrs from '../frameworkAttrs';

it('serializes a component containing framework-supplied attributes', () => {
    const elm = createElement('serializer-component', { is: FrameworkAttrs });
    document.body.appendChild(elm);

    expect(elm).toMatchSnapshot();
});
