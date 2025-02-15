import { Language } from './type';

const amharic: Language = {
    global: {},
    status: {
        connecting: 'እንደምንም በማስተካከል ...',
        connected: 'ተገናኙ',
        connected_confirm: 'ተገናኙ',
        disconnecting: 'እንደምንም ስም በማስተካከል ...',
        disconnected: 'ተለይተዋል',
        ip_check: 'IP ተመልከት ...',
        keep_trying: 'እባኮትን አንደኛ ጊዜ ሞክሩ!',
        preparing_rulesets: 'እየተዘጋጀ ነው የህጎች ዝርዝር...',
        downloading_rulesets_failed: 'የህጎች ዝርዝር መካወት አልተሳካም።'
    },
    home: {
        title_warp_based: 'Warp በመሠረት',
        drawer_settings_warp: 'Warp ቅኝት',
        drawer_settings_routing_rules: 'መንገድ ስሌት',
        drawer_settings_app: 'መተግበሪያ ቅኝት',
        drawer_settings_scanner: 'ስካነር ቅኝት',
        drawer_settings_network: 'መሳሪያ ቅኝት',
        drawer_log: 'መተግበሪያ ማህተም',
        drawer_update: 'ማዘመን',
        drawer_update_label: 'አዳዲስ ማዘመን',
        drawer_speed_test: 'አሳፋሪ ሙከራ',
        drawer_about: 'ስለ መተግበሪያ',
        drawer_lang: 'ቋንቋ ለማቀዝቀዝ',
        drawer_singbox: 'ታክክል ቅኝት'
    },
    toast: {
        ip_check_please_wait: 'እባኮትን እስከ ማስተካከል በማስተካከል ጊዜ ትንሽ ጊዜ ቆይተው እባኮትን ሞክሩ!',
        ir_location:
            'Cloudflare በኢራን ስፍራ የተገናኘ ኢፒ በአሁኑ ጊዜ ከእርስዎ እንደአማካይ ኢፒ ሲሆን፣ እርስዎ ከምስራቅ የማህበረሰብ ተቀባችሁ ይቀላቀላሉ፣ እንግዲኛም ሳንስሸክት ይሆናሉ። አሁን በማስተካከል ማነፃፀሪያ ማቀዝቀዝ በመንገድ።',
        btn_submit: 'ተቀባቸው',
        copied: 'ተተኮር፣ ተለዋል!',
        cleared: 'ማህተም እንደምንም አርከት!',
        please_wait: 'እባኮትን ቆይተው ተጠባበቁ...',
        offline: 'ከኢንተርኔት እንደ ተመላከት ያልሆነ!',
        settings_changed: 'ቅኝት ለማድረግ በግምት ይገባል!',
        hardware_usage: 'ይህን አማራጭ ማድረግ በማህተም ሁኔታ በሁሉም ማንሣብ አሰፋላለት!',
        config_added: 'እንደምንም ቅኝት ሰጠውም!',
        profile_added: 'አዲስ ነባሪ አውታረ ስር ያሳዩ!',
        endpoint_added: 'ተስተካክለት አሳዩ፣ ያስተካከልል።',
        new_update: 'የመተግበሪያው አዲስ ስሪት ዝግጁ ነው። እንዲያው አውርዶ ለመግጠም ዝግጁ ይደረጋል?'
    },
    settings: {
        title: 'የዋርፕ ቅንብሮች',
        more: 'ተጨማሪ ቅንብሮች',
        method_warp: 'ዋርፕ',
        method_warp_desc: 'ዋርፕን እንዲተካ ያስተካክሉ',
        method_gool: 'ጉል',
        method_gool_desc: 'WarpInWarpን እንዲተካ ያስተካክሉ',
        method_psiphon: 'ፒሲፎን',
        method_psiphon_desc: 'ፒሲፎንን እንዲተካ ያስተካክሉ',
        method_psiphon_location: 'ሀገር',
        method_psiphon_location_auto: 'አሰባሰብ',
        method_psiphon_location_desc: 'ተፈላጊ ሀገር IPን ይምረጡ',
        endpoint: 'ኤንድፖይንት',
        endpoint_desc: 'IP ወይም የድር ስም እና ፖርት ተያይዞ ይሰሩ',
        license: 'ፈቃድ',
        license_desc: 'ፈቃድ እንዲጠቀም ሁለት ጊዜ ሲሆን ተጠቃሚውን ይሳተፋል',
        option: 'የስምምነት ቅንብሮች',
        network: 'ኔትወርክ ቅንብሮች',
        proxy_mode: 'ኮንፊግሬሽን',
        proxy_mode_desc: 'እንዲሰሩ ፕሮክሲ ቅንብሮች ተይዙ',
        port: 'ፕሮክሲ ፖርት',
        port_desc: 'ስምምነት ፕሮክሲ ፖርት ተይዙ',
        share_vpn: 'አድራሻ መያዣ',
        share_vpn_desc: 'በኔትወርክ ፕሮክሲን እንዲጋሩ',
        dns: 'DNS',
        dns_desc: 'በፕሮክሲ ፍርምን አስተካክሉ',
        dns_error: 'ይህ በዋርፕና ጉል ሁሉም አስተካክልበት ሊሆን ነው',
        ip_data: 'IP ማረጋገጫ',
        ip_data_desc: 'ከግንኙነት በኋላ IP እና ቦታን አሳይ',
        data_usage: 'የመረጃ አጠቃቀም',
        data_usage_desc: 'መረጃን ስለአጠቃቀምና እባብነት የሚሆን ስፖርትን አሳይ',
        dark_mode: 'ዳርክ ሞዴ',
        dark_mode_desc: 'የአፕሊኬሽን እንዲታየ ሞዴን ተይዙ',
        lang: 'ቋንቋ',
        lang_desc: 'የአፕሊኬሽን ተቀባይነት ቋንቋ ቀይር',
        open_login: 'በማስገባት ሂደት ጀምር',
        open_login_desc: 'በስርዓት መነሻ እንዲክፈት',
        auto_connect: 'በስምምነት ተገናኝ',
        auto_connect_desc: 'አፕሊኬሽን በማክፈት እንዲገናኝ',
        system_tray: 'ስርዓት ትሬይ',
        system_tray_desc: 'በመስክ ላይ አፕሊኬሽን አምባልን አታሳይም',
        force_close: 'ግፊት ቅጣት',
        force_close_desc: 'በመዝጊያ ላይ ስርዓት ትሬይ ላይ አታቆማም',
        shortcut: 'አቀማመጥ',
        shortcut_desc: 'በመነሻ ገፅ ላይ ቅርጸ ተግባር ይኖራል',
        sound_effect: 'የድምፅ ተፅዕኖ',
        sound_effect_desc: 'በተሳካ መገናኘት ላይ ድምፅ ይጫወታል።',
        restore: 'እንደ አማራጭ ምላሽ',
        restore_desc: 'ተመናበረ ስምምነት ምትክ አቀርበዋል',
        scanner: 'እንቅስቃሴ ቅንብሮች',
        scanner_alert: 'እንቅስቃሴ አሳሳቢ በመምጣት ሲሆን በተለመዱት ኤንድፖይንት አድራሻ እንቅስቃሴ እንዲነበብ ተነስቷል',
        scanner_ip_type: 'ኤንድፖይንት አይነት',
        scanner_ip_type_auto: 'አሰባሰብ',
        scanner_ip_type_desc: 'ኤንድፖይንት IP ለማስፈን ተይዙ',
        scanner_rtt: 'ስብስብ',
        scanner_rtt_default: 'ተለመዱ',
        scanner_rtt_desc: 'እንቅስቃሴ RTT ውጤት',
        scanner_reserved: 'እንቅስቃሴ የሚያስተናግድ',
        scanner_reserved_desc: 'የwireguard ማስተናገድ እቅድ አሳይ',
        routing_rules: 'ግምገማ',
        routing_rules_desc: 'እባኮት ከመማሪያ እንቅስቃሴ በመሆኑ የማሳተፍ አሳሳቢ አቅም ይገናኝ',
        routing_rules_disabled: 'እንቅስቃሴ አልተገበረም',
        routing_rules_items: 'አሁን የታወቀ አንባሳት',
        profile: 'መለያ',
        profile_desc: 'እንዲሁም የታወቀ ተመልከት ማስተላለፊያ',
        singbox: 'ስንግቦክስ ቅንብሮች',
        close_singbox: 'ተዘግተው ይቆሟል',
        close_singbox_desc: 'በአቅም የማስተናገድ ተቋማት ተቀንሳል',
        close_helper: 'ማሳሰቢያ ተቆራከር',
        close_helper_desc: 'በማቅረብ እንዲቆረጠሉ በማንነት አሳይ',
        mtu: 'MTU የመለኪያ መጠን',
        mtu_desc: 'መች ቅንብሮች ማቅረብ ተይዙ',
        geo_block: 'ገምታት',
        geo_block_desc: 'ማህበረሰብ፣ ማስተናገድ፣ ማተሚያ እና ኪሪፕቶ ማስተናገድ',
        geo_rules_ip: 'IP መለያየት',
        geo_rules_ip_desc: 'GeoIP ስም ማስተናገድ',
        geo_rules_site: 'የአውትባ ወሳኝ',
        geo_rules_site_desc: 'GeoSite አማካኝነት ስምንበት',
        geo_nsfw_block: 'የማጣሪያ ይዘት',
        geo_nsfw_block_desc: 'የ NSFW ድረ-ገጾችን መገደብ',
        more_helper: 'ማሳሰቢያ ቅንብሮች',
        singbox_log: 'እትም አንደኛ',
        singbox_log_desc: 'እትም ሁለትን በመመን የምሳሌዎች',
        singbox_stack: 'እትም',
        singbox_stack_desc: 'እትም መመን ያሳይ',
        singbox_sniff: 'እንቅስቃሴ ይሳተፋል',
        singbox_sniff_desc: 'እንቅስቃሴ ላይ የማስተናገድ ትኩረት ተቀንሷል',
        singbox_addressing: 'መድረሻ',
        singbox_addressing_desc: 'የበገጠ በይነገጽ አይነት ማሰናጃ ይስተካከሉ',
        more_duties: 'ተጨማሪ ዕርምጃዎች',
        beta_release: 'እባብ እንቅስቃሴ',
        beta_release_desc: 'ስለ እንቅስቃሴ ከፊት በፊት ማህበረሰብ መረጃ ማግኘት'
    },
    tabs: {
        home: 'เชื่อมต่อ',
        warp: 'วาร์ป',
        network: 'เครือข่าย',
        scanner: 'เครื่องสแกน',
        app: 'แอป',
        singbox: 'ซิงบ็อกซ์'
    },
    modal: {
        endpoint_title: 'እንቅስቃሴ',
        license_title: 'ፈቃድ',
        license_desc: 'እባኮትን፣ ፕሮግራሙ እንደሆነ በዚህ ላይ ፈቃድዎን በመጠቀም ሊሄድ እንደሚችል እንዲሆን ፈቃድ አሳምንት አላስፈላጊ ነው።',
        license_clear: 'አጽዳ',
        test_url_title: 'ቴስት ዩአርኤል',
        test_url_desc: 'ግንኙነት ሙከራ አድራሻ',
        test_url_update: 'የሐሳብ አቀራረብ መቀበያ',
        port_title: 'ፕሮክሲ ፖርት',
        restore_title: 'ለመመንገድ ስለሚሞከሩት ትንታኔ',
        restore_desc: 'ለመንገዶች እባኮትን እትም ማነተኝነት',
        routing_rules_sample: 'በአተምታም',
        routing_rules_alert_tun: 'እባኮትን የስርእንኳን፣ አዳዲስ እና አመለካከት የሚገባውን በፍተሻ አማካኝነትን ተቀናበር።',
        routing_rules_alert_system: 'የስምምነት አማካኝነት የአትመልከትና ስምምነት ሲገባን ተግባር።',
        endpoint_default: 'አማካኝ',
        endpoint_suggested: 'ምክር',
        endpoint_latest: 'ሳምንት',
        endpoint_update: 'ምክሩን ይጠቀሙ',
        endpoint_paste: 'የሚገባ አትመልከት',
        profile_title: 'ፕሮፌል',
        profile_name: 'አካባቢ',
        profile_endpoint: 'አትመልከት',
        profile_limitation: (value) => `${value} አማካኝነቶችን በአንደኛ አካባቢ ይጠቀሙ`,
        mtu_title: 'እምነት ምክር',
        mtu_desc: 'እምነትን እንዲበረከት ማንኛውም ምክር በምርጥ ቁጥር።',
        confirm: 'እባኮትን ይዘው',
        update: 'አዳዲስ ይደርሳሉ',
        cancel: 'ተመካከተ'
    },
    log: {
        title: 'አፕ ሎግ',
        desc: 'በፕሮግራም ስራ ላይ ከሆነ ሎግ እዚህ ይታያል።',
        error_invalid_license: 'የተጠቃሚ ፈቃድ ስለማይታወቅ፣ እባኮትን አምጣት።',
        error_too_many_connected: 'ፈቃድ ማንበብ ይተለምታል፣ እባኮትን አምጣት።',
        error_access_denied: 'ፕሮግራሙን እንደ አስተዳዳሪ ተቀባበር እንደሚሰሩ ይሞክሩ።',
        error_failed_set_endpoint: 'እባኮትን ቅንብርን ተመልከቱ ወይም ሙሉ ተመልከቱ።',
        error_warp_identity: 'የካልድፍሌር መለኪያ ስህተት፣ እባኮትን ተመልከቱ።',
        error_script_failed: 'ፕሮግራሙ ስህተት ተከስቷል፣ እባኮትን ተመልከቱ።',
        error_object_null: 'ፕሮግራሙ ስህተት ተከስቷል፣ እባኮትን ተመልከቱ።',
        error_port_already_in_use: (value) => `ፖርት ${value} ከሌላ ፕሮግራም ተጠቃሚ ነው፣ ለማሻሻል ተቀይሩ።`,
        error_port_socket: 'ሌላ ፖርት ይጠቀሙ።',
        error_port_restart: 'ፖርት ተጠቃሚ ነው፣ እንደገና እንደ ምታሞች ...',
        error_unknown_flag: 'በመሳሪያው ውስጥ ስህተት የተከሰተ ነው።',
        error_deadline_exceeded: 'መጠባበቂያ ጊዜ ተሻሽሎታል፣ እባኮትን ተመልከቱ።',
        error_configuration_encountered: 'ፕሮክሲ ቅንብር ስህተት ተከሰተ።',
        error_desktop_not_supported: 'የእንተም ማብቂያ ስርዓት አልተደገፈም።',
        error_configuration_not_supported:
            'ፕሮክሲ ቅንብር በስርዓትዎ ላይ አልተስፋፋም፣ ነገር ግን Warp Proxy በማንበብ ትጠቀሙ ይችላሉ።',
        error_configuring_proxy: (value) => `${value} ስለማይተስፋፋ፣ ፕሮክሲ ቅንብር ስህተት።`,
        error_wp_not_found: 'የwarp-plus ፋይል በፕሮግራም ፓኬጅ ባለማግኘት።',
        error_wp_exclusions:
            'ፋይል ወርፕ-ፕላስ በተለምዶ ስለ ተሳሳተ ፋልስ ፖዚቲቭ ማስታወቂያ እና ትክክለኛ ተመን አንቲቫይሩስ ተመልከተ፣ ስለዚህም እትም ስለማንኛውም መሳሪያ ኢንተርኔትን ማግኘት በችግኝ እንደሆነ።\nእባኮትን ፕሮግራሙ ተወላጅ መንገድ ሲሰጠው ፋይሉን በአንቲቫይሩስ ተከታታይ ዝርዝሮች ላይ እንዲጨምር ማንበብ አለበት። እንዲሆን ይኖርብማል?',
        error_wp_stopped: 'የwarp-plus ፋይል ስህተት ተከሰተ ነው።',
        error_connection_failed: '1.1.1.1 ጋር ተเชም ማድረግ አልቻልኩም።',
        error_country_failed: 'ተመርጠው ያሉበት ሀገር ማድረግ አልቻልኩም።',
        error_singbox_failed_stop: 'Sing-Box እንደገና ማቆም አልቻልኩም።',
        error_singbox_failed_start: 'Sing-Box እንደገና መጀመር አልቻልኩም።',
        error_wp_reset_peer: 'ከCloudflare ጋር መገናኘት አቋረጠ።',
        error_failed_connection: 'ግንኙነት አልተቋረጠም።',
        error_canceled_by_user: 'እንዲሁ ተለዋዋጭ በተጠቃሚ ተሰርዟል።',
        error_helper_not_found: 'የረዳት ፋይል ከመተግበሪያ ጥቅል ጋር አልተገኘም!'
    },
    about: {
        title: 'ስለ አፕ',
        desc: 'ይህ ፕሮግራም በተለምዶ በእንግሊዝ አንደኛ እትም በእርግጥ ተቀባ ያላቸው በWindows፣ Linux፣ Mac እንደ ተለምዶ እሱን ይዤን አብስለት የምስሉን እንደ ማንበብ ስም እንደ እርግጥ በሆነ ባስተላለፉበት ስም አይደሉም፣ ሁሉንም በእርግጥ ይጠቀሙ ይሁን፣ በእርግጥ በተቀባ የትብብሩን በፍትሐት ይሁን፣ አማራጭ።',
        slogan: 'ኢንተርኔት፣ ለሁሉም ወይም ለማንም ነው!'
    },
    systemTray: {
        connect: 'ገና እንደምታገኙ',
        connecting: 'እንደምታገኙ ...',
        connected: 'ተገናኙ',
        disconnecting: 'ተለይተለዋት ...',
        settings: 'ቅንብሮች',
        settings_warp: 'Warp',
        settings_network: 'መሳሪያ',
        settings_scanner: 'መሳሪያ ተለዋዋጭ',
        settings_app: 'መተግበሪያ',
        about: 'ስለምትሆነ',
        log: 'ሎግ',
        speed_test: 'ፍጥነት ፈተና',
        exit: 'መውጣት'
    },
    update: {
        available: 'አስተካክል ስለምትሆነ ተገናኝ',
        available_message: (value) =>
            `አዲስ ተለመድ እትም ለ${value} ተገናኝ ነው፣ በአሁኑ ጊዜ ለምትተስፋፋልት ፈርስታ ይችላሉ።`,
        ready: 'አስተካክል ስለምትሆነ ተቀባል',
        ready_message: (value) => `አዲስ ተለመድ እትም ለ${value} ተስፋፋል ነው፣ እሱ ምትሰብስቦ በመነጋገር እንደምትከኝ።`
    },
    speedTest: {
        title: 'ፍጥነት ፈተና',
        initializing: 'ፍጥነት ፈተና በመስክ ተቀባዊ ...',
        click_start: 'ፍጥነት ፈተና መጀመር በመነጋገር እባኮት ሰርቶት',
        error_msg: 'ስህተት ተከሰትቷል፣ እባኮትን እንደገና ተመልከቱ።',
        server_unavailable: 'ፍጥነት ፈተና ሰርቨር አልተጠቀምም',
        download_speed: 'ዳውንሎድ ፍጥነት',
        upload_speed: 'አፕሎድ ፍጥነት',
        latency: 'ሳምንት',
        jitter: 'ጂተር'
    }
};
export default amharic;
