<?php

namespace Flynt\Components\SliderFeatures;

use Flynt\FieldVariables;
use Flynt\Utils\Options;

add_filter('Flynt/addComponentData?name=SliderFeatures', function (array $data): array {
    $data['sliderOptions'] = Options::getTranslatable('SliderOptions');
    $data['jsonData'] = [
        'options' => array_merge($data['sliderOptions'], $data['options']),
    ];
    return $data;
});

function getACFLayout(): array
{
    return [
        'name' => 'sliderFeatures',
        'label' => __('Slider: Features', 'flynt'),
        'sub_fields' => [
            [
                'label' => __('Content', 'flynt'),
                'name' => 'contentTab',
                'type' => 'tab',
                'placement' => 'top',
                'endpoint' => 0
            ],
            [
                'label' => 'Title',
                'name' => 'title',
                'type' => 'text',
            ],
            [
                'label' => 'Subtitle',
                'name' => 'subtitle',
                'type' => 'wysiwyg',
            ],
            [
                'label' => 'Description',
                'name' => 'description',
                'type' => 'wysiwyg',
            ],
            [
                'label' => 'Features',
                'name' => 'features',
                'type' => 'repeater',
                'required' => 0,
                'layout' => 'table',
                'button_label' => 'Add Row',
                'rows_per_page' => 20,
                'layout' => 'row',
                'sub_fields' => [
                    [
                        'label' => 'Title',
                        'name' => 'title',
                        'type' => 'text',
                    ],
                    [
                        'label' => 'Description',
                        'name' => 'description',
                        'type' => 'text',
                    ],
                    [
                        'label' => 'Preview Image',
                        'name' => 'preview',
                        'type' => 'image',
                        'required' => 1,
                        'return_format' => 'array',
                        'library' => 'all',
                        'preview_size' => 'medium',
                    ],
                    [
                        'label' => 'Link',
                        'name' => 'link',
                        'type' => 'link',
                        'required' => 0,
                    ],
                ],
            ],
            [
                'label' => __('Options', 'flynt'),
                'name' => 'optionsTab',
                'type' => 'tab',
                'placement' => 'top',
                'endpoint' => 0
            ],
            [
                'label' => '',
                'name' => 'options',
                'type' => 'group',
                'layout' => 'row',
                'sub_fields' => [
                    [
                        'label' => __('Enable Autoplay', 'flynt'),
                        'name' => 'autoplay',
                        'type' => 'true_false',
                        'default_value' => 0,
                        'ui' => 1
                    ],
                    [
                        'label' => __('Autoplay Speed (in milliseconds)', 'flynt'),
                        'name' => 'autoplaySpeed',
                        'type' => 'number',
                        'min' => 2000,
                        'step' => 1,
                        'default_value' => 4000,
                        'required' => 1,
                        'conditional_logic' => [
                            [
                                [
                                    'fieldPath' => 'autoplay',
                                    'operator' => '==',
                                    'value' => 1
                                ]
                            ]
                        ],
                    ],
                    FieldVariables\getTheme()
                ]
            ]
        ]
    ];
}
