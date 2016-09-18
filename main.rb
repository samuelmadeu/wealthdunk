require 'sinatra'


get '/' do
 File.read(File.join('public/wealthdunk.html'))
end

