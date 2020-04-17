class Formatter {
    static capitalize(string) {
        return string[0].toUpperCase() + string.slice(1, string.length);
    }

    static sanitize(string) {
        return string.replace(/[^A-Za-z0-9-' ]+/g, '');
    }

    static titleize(string) {
        return Formatter.capitalize(string.split(' ').map(word =>
            ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the'].includes(word) ? word : Formatter.capitalize(word)
            ).join(' '));
    }
}