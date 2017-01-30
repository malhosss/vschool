function checkPalindrom(palindrom)
{
    var isPali = true;
    for( var i = palindrom.length-1, j = 0; i > 0; i--, j++ )
    {
        if( palindrom[i] != palindrom[j] )
        {
            isPali = false;
            break;
        }
    }
    console.log(isPali);
}
checkPalindrom('jacob');
checkPalindrom('racecar');
checkPalindrom('hannah');
