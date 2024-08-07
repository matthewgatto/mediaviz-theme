<?php

namespace Flynt\Components\BlockCalculation;

function getACFLayout(): array
{
    return [
        'name' => 'blockCalculation',
        'label' => __('Block: Calculation', 'flynt'),
        'sub_fields' => [
            [
                'label' => 'Title',
                'name' => 'title',
                'type' => 'wysiwyg',
            ],
            [
                'label' => 'Subtitle',
                'name' => 'subtitle',
                'type' => 'wysiwyg',
            ],
            [
                'label' => 'Form Placeholder',
                'name' => 'formPlaceholder',
                'type' => 'text',
            ],
            [
                'label' => 'Form Submit Text',
                'name' => 'formSubmitText',
                'type' => 'text',
            ]
        ]
    ];
}
