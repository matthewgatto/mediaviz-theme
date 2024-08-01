<?php

namespace Flynt\Components\HeroPrimary;

use Flynt\FieldVariables;

function getACFLayout(): array
{
    return [
        'name' => 'heroPrimary',
        'label' => __('Hero: Primary', 'flynt'),
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
                'label' => 'Show Request Demo Form',
                'name' => 'show_request_demo_form',
                'type' => 'true_false',
                'default_value' => 0,
                'ui' => 0,
                'ui_on_text' => '',
                'ui_off_text' => '',
            ],
            [
                'label' => 'Form Label',
                'name' => 'form_label',
                'type' => 'text',
                'conditional_logic' => [
                    [
                        [
                            'fieldPath' => 'show_request_demo_form',
                            'operator' => '==',
                            'value' => '1',
                        ],
                    ],
                ],
            ],
            [
                'label' => 'Form Submit Text',
                'name' => 'form_submit_text',
                'type' => 'text',
                'conditional_logic' => [
                    [
                        [
                            'fieldPath' => 'show_request_demo_form',
                            'operator' => '==',
                            'value' => '1',
                        ],
                    ],
                ],
            ],
            [
                'label' => 'illustration',
                'name' => 'illustration',
                'type' => 'image',
                'return_format' => 'url',
                'library' => 'all',
                'preview_size' => 'medium',
            ]
        ]
    ];
}
