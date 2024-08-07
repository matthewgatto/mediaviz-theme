<?php

namespace Flynt\Components\LogoCloud;

function getACFLayout(): array
{
    return [
        'name' => 'logoCloud',
        'label' => __('Logo Cloud', 'flynt'),
        'sub_fields' => [
            [
                'label' => 'Title',
                'name' => 'title',
                'type' => 'text',
            ],
            [
                'label' => 'CTA Text',
                'name' => 'cta_text',
                'type' => 'text',
                'required' => 0,
                'default_value' => '',
            ],
            [
                'label' => 'CTA Link',
                'name' => 'cta_link',
                'type' => 'link',
                'return_format' => 'array',
            ],
            [
                'label' => 'CTA Theme',
                'name' => 'cta_theme',
                'type' => 'select',
                'choices' => [
                    'primary' => 'primary',
                    'secondary' => 'secondary',
                    'link' => 'link',
                ],
                'default_value' => false,
                'return_format' => 'value',
            ],
            [
                'label' => 'CTA Show Arrow',
                'name' => 'cta_show_arrow',
                'type' => 'true_false',
                'conditional_logic' => [
                    [
                        [
                            'fieldPath' => 'cta_theme',
                            'operator' => '==',
                            'value' => 'link',
                        ],
                    ],
                ],
                'wrapper' => [
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ],
                'default_value' => 0,
            ],
            [
                'label' => 'Logos',
                'name' => 'logos',
                'type' => 'repeater',
                'required' => 0,
                'layout' => 'table',
                'button_label' => 'Add Row',
                'rows_per_page' => 20,
                'sub_fields' => [
                    [
                        'label' => 'Name',
                        'name' => 'name',
                        'type' => 'text',
                    ],
                    [
                        'label' => 'Logo',
                        'name' => 'logo',
                        'type' => 'image',
                        'required' => 1,
                        'return_format' => 'array',
                        'library' => 'all',
                        'preview_size' => 'medium',
                    ],
                    [
                        'label' => 'Link',
                        'name' => 'link',
                        'type' => 'url',
                        'required' => 0,
                    ],
                ],
            ]
        ]
    ];
}
