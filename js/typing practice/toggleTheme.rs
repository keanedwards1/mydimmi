use stdweb::web::{
    document,
    IEventTarget,
};

fn main() {
    let rectangle_container = document().get_element_by_id("rectangleContainer").unwrap();
    let close_button = document().get_element_by_id("closeButton").unwrap();
    let info_button = document().get_element_by_id("info-image").unwrap();
    let toggle_theme_button = document().get_element_by_id("theme-image").unwrap();
    let profile_photoy = document().get_element_by_id("profile-photo").unwrap();
    let logo_imagey = document().get_element_by_id("logo").unwrap();
    let mut is_rectangle_visible = false;

    let toggle_rectangle_visibility = || {
        if is_rectangle_visible {
            rectangle_container.set_attribute("style", "right: -420px;");
        } else {
            rectangle_container.set_attribute("style", "right: 0;");
        }
        is_rectangle_visible = !is_rectangle_visible;
    };

    info_button.add_event_listener(toggle_rectangle_visibility);

    close_button.add_event_listener(|event| {
        rectangle_container.set_attribute("style", "right: -320px;");
        is_rectangle_visible = false;
        event.stop_propagation();
    });

    document().add_event_listener(|event| {
        if (event.meta_key() || event.ctrl_key()) && event.key() == "i" {
            toggle_rectangle_visibility();
        }
    });

    document().add_event_listener(|event| {
        let target = event.target();
        if is_rectangle_visible
            && target != rectangle_container
            && !rectangle_container.contains(&target)
            && target != info_button
            && target != toggle_theme_button
            && target != profile_photoy
            && target != logo_imagey
        {
            toggle_rectangle_visibility();
        }
    });

    /*****************************************************/
    /*************** #result-rectangle ********************/
    /*****************************************************/

    // JavaScript code to show and hide the result rectangle
    let current_page = get_current_page(); // Replace this with the actual function to get the current page

    if current_page == "index.html" {
        let result_rectangle = document().get_element_by_id("result-rectangle").unwrap();
        let submit_button = document().get_element_by_id("submit-img").unwrap();
        let poem_inputy = document().get_element_by_id("poem-input").unwrap();
        let result_rectangle_poem = document().get_element_by_id("result-rectangle-poem").unwrap();
        let mut is_poem_rectangle_visible = false;

        let show_result_rectangle = || {
            let content = poem_inputy.value();
            result_rectangle_poem.set_text_content(&content);
            result_rectangle.set_attribute("style", "display: block;");
            is_poem_rectangle_visible = true;
        };

        let hide_result_rectangle = || {
            result_rectangle.set_attribute("style", "display: none;");
            is_poem_rectangle_visible = false;
        };

        submit_button.add_event_listener(|event| {
            event.prevent_default();
            if is_poem_rectangle_visible {
                hide_result_rectangle();
            } else {
                show_result_rectangle();
            }
        });

        document().add_event_listener(|event| {
            let target = event.target();
            if is_poem_rectangle_visible
                && target != result_rectangle
                && !result_rectangle.contains(&target)
                && target != submit_button
                && target != toggle_theme_button
                && target != profile_photoy
                && target != logo_imagey
            {
                hide_result_rectangle();
            }
        });

        document().add_event_listener(|event| {
            if (event.meta_key() || event.ctrl_key()) && event.key() == "Enter" {
                if is_poem_rectangle_visible {
                    hide_result_rectangle();
                } else {
                    show_result_rectangle();
                }
            }
        });
    }
}
